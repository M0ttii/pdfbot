import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })
  
    const {
      data: { user },
    } = await supabase.auth.getUser()
    console.log(user);
  
    // if user is signed in and the current path is / redirect the user to /account
    if (user && req.nextUrl.pathname === '/') {
      console.log("Signed in")
      return NextResponse.redirect(new URL('/chat', req.url))
    }
  
    // if user is not signed in and the current path is not / redirect the user to /
    if (!user && req.nextUrl.pathname !== '/') {
      console.log("Not signed in")
      return NextResponse.redirect(new URL('/', req.url))
    }
  
    return res
  }
  
  export const config = {
    matcher: ['/', '/chat'],
  }