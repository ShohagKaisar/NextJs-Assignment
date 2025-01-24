import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - details/:path* (dynamic details route excluded)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$|details).*)',
  ],
};

export default withAuth;
