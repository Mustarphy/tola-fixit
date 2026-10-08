'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from 'react';

import {
  isActivePath,
  isNavMenu,
  primaryNavigation,
  type NavListMenu,
  type NavMegaMenu,
  type NavMenu,
} from '@/components/layout/navigation';
import { cn } from '@/lib/utils';

type OpenTrigger = 'hover' | 'click';

interface OpenMenuState {
  id: string;
  pathname: string;
  trigger: OpenTrigger;
}

const hoverCloseDelayMs = 150;

const topLevelItemClasses =
  'relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-nav font-medium tracking-wide transition-colors hover:text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity';

const panelLinkClasses =
  'flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground aria-[current=page]:font-semibold aria-[current=page]:text-primary';

function getPanelId(menuId: string): string {
  return `desktop-nav-panel-${menuId}`;
}

function getPanelLinks(menuId: string): HTMLAnchorElement[] {
  const panel = document.getElementById(getPanelId(menuId));
  return panel ? Array.from(panel.querySelectorAll('a')) : [];
}

export function DesktopNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenuState | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);
  const pendingFocusRef = useRef<string | null>(null);

  const openMenuId = openMenu?.pathname === pathname ? openMenu.id : null;

  function clearCloseTimer() {
    window.clearTimeout(closeTimerRef.current);
  }

  function openMenuById(id: string, trigger: OpenTrigger) {
    clearCloseTimer();
    setOpenMenu({ id, pathname, trigger });
  }

  function closeMenu() {
    clearCloseTimer();
    setOpenMenu(null);
  }

  function focusTrigger(id: string) {
    document.getElementById(`desktop-nav-trigger-${id}`)?.focus();
  }

  useEffect(() => {
    if (!openMenuId) return;

    if (pendingFocusRef.current === openMenuId) {
      pendingFocusRef.current = null;
      getPanelLinks(openMenuId)[0]?.focus();
    }

    function handlePointerDown(event: globalThis.PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Escape' || !openMenuId) return;
      const focusWasInside = navRef.current?.contains(document.activeElement);
      setOpenMenu(null);
      if (focusWasInside) focusTrigger(openMenuId);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openMenuId]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  function handleTriggerClick(id: string) {
    if (openMenuId === id && openMenu?.trigger === 'hover') {
      openMenuById(id, 'click');
      return;
    }
    if (openMenuId === id) {
      closeMenu();
    } else {
      openMenuById(id, 'click');
    }
  }

  function handleTriggerKeyDown(event: KeyboardEvent, id: string) {
    if (event.key !== 'ArrowDown') return;
    event.preventDefault();
    if (openMenuId === id) {
      getPanelLinks(id)[0]?.focus();
    } else {
      pendingFocusRef.current = id;
      openMenuById(id, 'click');
    }
  }

  function handlePanelKeyDown(event: KeyboardEvent, id: string) {
    const links = getPanelLinks(id);
    const currentIndex = links.indexOf(
      document.activeElement as HTMLAnchorElement,
    );
    const lastIndex = links.length - 1;
    const nextIndexByKey: Record<string, number> = {
      ArrowDown: currentIndex >= lastIndex ? 0 : currentIndex + 1,
      ArrowUp: currentIndex <= 0 ? lastIndex : currentIndex - 1,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = nextIndexByKey[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    links[nextIndex]?.focus();
  }

  function handlePointerEnter(event: PointerEvent, id: string) {
    if (event.pointerType !== 'mouse') return;
    if (openMenuId === id) {
      clearCloseTimer();
      return;
    }
    openMenuById(id, 'hover');
  }

  function handlePointerLeave(event: PointerEvent, id: string) {
    if (event.pointerType !== 'mouse') return;
    if (openMenuId !== id || openMenu?.trigger !== 'hover') return;
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(closeMenu, hoverCloseDelayMs);
  }

  function handleItemBlur(event: FocusEvent<HTMLLIElement>, id: string) {
    if (openMenuId !== id) return;
    if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
  }

  function handleNavClick(event: MouseEvent) {
    if ((event.target as Element).closest('a')) closeMenu();
  }

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      onClick={handleNavClick}
      className="hidden lg:block"
    >
      <ul className="flex items-center gap-1 xl:gap-2">
        {primaryNavigation.map((item) => {
          if (!isNavMenu(item)) {
            const isCurrent = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={cn(
                    topLevelItemClasses,
                    isActivePath(pathname, item.href) &&
                      'text-primary after:opacity-100',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const isOpen = openMenuId === item.id;
          const isSectionActive = isActivePath(pathname, item.href);

          return (
            <li
              key={item.id}
              className={cn(item.type === 'list' && 'relative')}
              onPointerEnter={(event) => handlePointerEnter(event, item.id)}
              onPointerLeave={(event) => handlePointerLeave(event, item.id)}
              onBlur={(event) => handleItemBlur(event, item.id)}
            >
              <button
                id={`desktop-nav-trigger-${item.id}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={getPanelId(item.id)}
                onClick={() => handleTriggerClick(item.id)}
                onKeyDown={(event) => handleTriggerKeyDown(event, item.id)}
                className={cn(
                  topLevelItemClasses,
                  (isOpen || isSectionActive) && 'text-primary',
                  isSectionActive && 'after:opacity-100',
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'size-4 transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
              <NavPanel
                menu={item}
                isOpen={isOpen}
                pathname={pathname}
                onKeyDown={(event) => handlePanelKeyDown(event, item.id)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

interface NavPanelProps {
  menu: NavMenu;
  isOpen: boolean;
  pathname: string;
  onKeyDown: (event: KeyboardEvent) => void;
}

function NavPanel({ menu, isOpen, pathname, onKeyDown }: NavPanelProps) {
  return (
    <div
      id={getPanelId(menu.id)}
      onKeyDown={onKeyDown}
      className={cn(
        'absolute top-full z-50 pt-2 duration-150 ease-out',
        menu.type === 'mega' ? 'inset-x-4 sm:inset-x-6 lg:inset-x-8' : 'left-0',
        isOpen
          ? 'visible translate-y-0 opacity-100 transition-[opacity,translate]'
          : 'invisible -translate-y-1 opacity-0 transition-[opacity,translate,visibility]',
      )}
    >
      <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
        {menu.type === 'mega' ? (
          <MegaPanelContent menu={menu} pathname={pathname} />
        ) : (
          <ListPanelContent menu={menu} pathname={pathname} />
        )}
      </div>
    </div>
  );
}

interface PanelContentProps<TMenu extends NavMenu> {
  menu: TMenu;
  pathname: string;
}

function MegaPanelContent({ menu, pathname }: PanelContentProps<NavMegaMenu>) {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-5 xl:grid-cols-5 xl:gap-6 xl:p-6">
        {menu.groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {group.label}
            </p>
            <ul>
              {group.links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={panelLinkClasses}
                    >
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="size-4 shrink-0 text-primary"
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="hidden flex-col rounded-md bg-secondary p-5 text-secondary-foreground xl:flex">
          <p className="font-display text-base font-semibold">
            {menu.feature.title}
          </p>
          <p className="mt-2 text-sm text-secondary-foreground/75">
            {menu.feature.description}
          </p>
          <Link
            href={menu.feature.link.href}
            className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-secondary-foreground"
          >
            {menu.feature.link.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 border-t bg-surface px-5 py-3 xl:px-6">
        <p className="hidden text-sm text-muted-foreground xl:block">
          Find the right repair or maintenance service for your vehicle.
        </p>
        <p className="text-sm text-muted-foreground xl:hidden">
          {menu.feature.title}{' '}
          <Link
            href={menu.feature.link.href}
            className="rounded-sm font-semibold text-foreground underline underline-offset-4 hover:text-primary"
          >
            Start with {menu.feature.link.label.toLowerCase()}
          </Link>
        </p>
        <Link
          href={menu.overview.href}
          aria-current={pathname === menu.overview.href ? 'page' : undefined}
          className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {menu.overview.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </>
  );
}

function ListPanelContent({ menu, pathname }: PanelContentProps<NavListMenu>) {
  return (
    <ul className="w-72 p-2">
      {menu.links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            aria-current={pathname === link.href ? 'page' : undefined}
            className={cn(
              panelLinkClasses,
              'flex-col items-start gap-0.5 px-3',
            )}
          >
            <span>{link.label}</span>
            {link.description && (
              <span className="text-xs font-normal text-muted-foreground">
                {link.description}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
