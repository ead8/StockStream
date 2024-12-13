import { NextResponse } from 'next/server';
import { login } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await login(body);
    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        message: error instanceof Error ? error.message : 'Authentication failed'
      },
      { status: 400 }
    );
  }
}