'use client';

import { ArrowRight, ChevronDown, MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

import { Logo } from '@/components/layout/logo';
import {
  isActivePath,
  isNavMenu,
  primaryNavigation,
  type NavLink,
  type NavMenu,
} from '@/components/layout/navigation';
import { buttonClassName } from '@/components/ui/button';
import { bookServicePath, serviceArea } from '@/lib/constants';
import { cn } from '@/lib/utils';

const desktopMediaQuery = '(min-width: 64rem)';

const rowClasses =
  'flex min-h-12 w-full items-center justify-between gap-3 rounded-md px-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground aria-[current=page]:text-primary';

const subLinkClasses =
  'flex min-h-11 items-center gap-2.5 rounded-md px-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground aria-[current=page]:font-semibold aria-[current=page]:text-primary';

export function MobileNav() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenuId, setExpandedMenuId] = useState<string | null>(null);

  function openDialog() {
    dialogRef.current?.showModal();
    closeButtonRef.current?.focus();
    setIsOpen(true);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia(desktopMediaQuery);
    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) dialogRef.current?.close();
    }
    desktopQuery.addEventListener('change', handleViewportChange);
    return () =>
      desktopQuery.removeEventListener('change', handleViewportChange);
  }, []);

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    const target = event.target as Element;
    if (target === event.currentTarget || target.closest('a')) closeDialog();
  }

  function toggleMenu(id: string) {
    setExpandedMenuId((currentId) => (currentId === id ? null : id));
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={openDialog}
        className="inline-flex size-11 items-center justify-center rounded-md border border-border-strong transition-colors hover:border-foreground lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Menu"
        onClose={() => setIsOpen(false)}
        onClick={handleDialogClick}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full max-w-md bg-background p-0 text-foreground backdrop:bg-secondary/50"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4 sm:px-6">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={closeDialog}
              className="inline-flex size-11 items-center justify-center rounded-md border border-border-strong transition-colors hover:border-foreground"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav
            aria-label="Main"
            className="flex-1 overflow-y-auto overscroll-contain px-2 py-4 sm:px-4"
          >
            <ul className="space-y-1">
              {primaryNavigation.map((item) =>
                isNavMenu(item) ? (
                  <li key={item.id}>
                    <MobileMenuSection
                      menu={item}
                      pathname={pathname}
                      isExpanded={expandedMenuId === item.id}
                      onToggle={() => toggleMenu(item.id)}
                    />
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={cn(
                        rowClasses,
                        isActivePath(pathname, item.href) && 'text-primary',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="shrink-0 space-y-4 border-t bg-surface px-4 py-5 sm:px-6">
            <Link
              href={bookServicePath}
              className={buttonClassName({ size: 'lg', className: 'w-full' })}
            >
              Book a Service
            </Link>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>
                Based in {serviceArea.base}. {serviceArea.coverage}.
              </span>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

interface MobileMenuSectionProps {
  menu: NavMenu;
  pathname: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function MobileMenuSection({
  menu,
  pathname,
  isExpanded,
  onToggle,
}: MobileMenuSectionProps) {
  const panelId = `mobile-nav-panel-${menu.id}`;

  return (
    <>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          rowClasses,
          isActivePath(pathname, menu.href) && 'text-primary',
        )}
      >
        {menu.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'size-5 transition-transform duration-200',
            isExpanded && 'rotate-180',
          )}
        />
      </button>
      <div id={panelId} hidden={!isExpanded} className="pb-2 pl-3">
        {menu.type === 'mega' ? (
          <>
            {menu.groups.map((group) => (
              <div key={group.label} className="mt-3">
                <p className="px-3 pb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {group.label}
                </p>
                <MobileLinkList links={group.links} pathname={pathname} />
              </div>
            ))}
            <div className="mt-4 rounded-md bg-secondary p-4 text-secondary-foreground">
              <p className="font-semibold">{menu.feature.title}</p>
              <p className="mt-1 text-sm text-secondary-foreground/75">
                {menu.feature.description}
              </p>
              <Link
                href={menu.feature.link.href}
                className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-secondary-foreground"
              >
                {menu.feature.link.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <Link
              href={menu.overview.href}
              aria-current={
                pathname === menu.overview.href ? 'page' : undefined
              }
              className={cn(subLinkClasses, 'mt-2 font-semibold text-primary')}
            >
              {menu.overview.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </>
        ) : (
          <MobileLinkList links={menu.links} pathname={pathname} />
        )}
      </div>
    </>
  );
}

interface MobileLinkListProps {
  links: NavLink[];
  pathname: string;
}

function MobileLinkList({ links, pathname }: MobileLinkListProps) {
  return (
    <ul>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={subLinkClasses}
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
  );
}
