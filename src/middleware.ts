import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const requestHeaders = new Headers(request.headers)

    const response = NextResponse.next({
        request: {
          headers: requestHeaders
        }
      })

    response.headers.set('template-from', 'https://github.com/TimoTielens/twt-nextjstemplate')
    return response
}