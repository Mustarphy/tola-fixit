import Link from 'next/link';

import { DesktopNav } from '@/components/layout/desktop-nav';
import { Logo } from '@/components/layout/logo';
import { MobileNav } from '@/components/layout/mobile-nav';
import { TopBar } from '@/components/layout/top-bar';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { bookServicePath } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky -top-9 z-40 border-b bg-background">
      <TopBar />
      <Container className="relative flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <Link
            href={bookServicePath}
            className={buttonClassName({
              className: 'hidden sm:inline-flex',
            })}
          >
            Book a Service
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
