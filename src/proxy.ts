import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lance-language", request.nextUrl.pathname.startsWith("/rw") ? "rw" : "en");
  return NextResponse.next({ request: { headers: requestHeaders } });
}
export const config = { matcher: ["/", "/rw"] };
