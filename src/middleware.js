import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, ev) {
    const url = req.nextUrl.clone()
    const referer = req.headers.get('referer') || "";

    if(!url.pathname.startsWith('/post')){
        return NextResponse.next()
    }

    if (req.nextUrl.searchParams.get('fbclid') || referer.includes('facebook.com')) {
        return NextResponse.redirect(`https://forever-love-animals.com/${url.pathname}`)
    } else{
        return NextResponse.rewrite(url) 
    }
    
}
