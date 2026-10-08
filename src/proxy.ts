import { NextResponse, type NextRequest } from 'next/server';

import { isServiceSlug } from '@/content/service-slugs';

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split('/')[2] ?? '';
  if (isServiceSlug(slug)) return NextResponse.next();

  return NextResponse.rewrite(new URL('/_not-found', request.url), {
    status: 404,
  });
}

export const config = {
  matcher: '/services/:service',
};
