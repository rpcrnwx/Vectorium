import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET(request: NextRequest) {
  try {
    // Extract the access token from the Authorization header
    const authHeader = request.headers.get('authorization');
    const accessToken = authHeader?.split(' ')[1];

    // Create Supabase client with the user's access token
    const supabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );

    // Get authenticated user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const userId = user.id;

    // Fetch balance from profiles
    const { data, error } = await supabase
      .from('profiles')
      .select('balance')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching balance:', error);
      return NextResponse.json(
        { error: 'Failed to fetch balance', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ balance: data.balance });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const accessToken = authHeader?.split(' ')[1];
    const supabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const userId = user.id;
    const { balance } = await request.json();
    if (typeof balance !== 'number') {
      return NextResponse.json({ error: 'Invalid balance value' }, { status: 400 });
    }
    const { error } = await supabase
      .from('profiles')
      .update({ balance })
      .eq('id', userId);
    if (error) {
      console.error('Error updating balance:', error);
      return NextResponse.json(
        { error: 'Failed to update balance', details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 