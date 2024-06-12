import { NextRequest, NextResponse } from 'next/server';
 
export default function middleware(request: NextRequest) {
  // x-middleware-subrequest is only set on edge runtime requests
  console.log(request.headers.get('x-middleware-subrequest'))

  return NextResponse.rewrite(request.url);
};
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - _vercel (vercel internals, eg: web vitals)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|_vercel|favicon.ico).*)',
  ],
};
