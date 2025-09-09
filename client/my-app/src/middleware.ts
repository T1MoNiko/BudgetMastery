import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'; 

export async function middleware(request: NextRequest) {  
    const accessTokenCookie = await request.cookies.get("budget_token")?.value;

    if (!accessTokenCookie) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    try {
        NextResponse.redirect(new URL('/home', request.url));
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL('/auth', request.url));
    }
}

export const config = {
    matcher: ['/home/:path*', '/stats/:path*', '/profile/:path*'], 
};
    