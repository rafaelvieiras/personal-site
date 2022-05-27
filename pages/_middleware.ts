import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/casamento') {
        return NextResponse.redirect('https://wedy.com/thamis-e-rafa/confirmar-presenca/l')
    }
    return NextResponse.next()
}