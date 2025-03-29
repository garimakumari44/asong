// app/api/auth/error/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const error = searchParams.get('error') || 'Authentication failed';
  
  return NextResponse.json(
    { error },
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}