import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  // GET /api/users リクエストの処理
  return NextResponse.json({});
}

export function POST(request: NextRequest): NextResponse {
  // POST /api/users リクエストの処理
  return NextResponse.json({});
}