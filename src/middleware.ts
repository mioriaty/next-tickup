import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware(
  (auth, req) => {
    const { userId, orgId, redirectToSignIn } = auth();

    // Chưa đăng nhập + không phải public route
    if (!userId && !isPublicRoute(req)) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // Đã đăng nhập rồi
    if (userId) {
      if (!orgId) {
        // return NextResponse.redirect(new URL('/create-workspace', req.url), 308);
        return NextResponse.rewrite(new URL('/dashboard', req.url));
      }
      if (orgId && isPublicRoute(req)) {
        return NextResponse.rewrite(new URL(`/w/${orgId}/home`, req.url));
      }
      return;
    }
    return;
  },
  {
    debug: true
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
