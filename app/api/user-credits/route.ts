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

    const { data, error } = await supabase
      .from('user_carbon_credits')
      .select(`
        *,
        carbon_credits (
          name,
          vintage,
          certification_body,
          carbon_reduction,
          category
        )
      `)
      .eq('user_id', userId)
      .gt('quantity', 0);

    if (error) {
      console.error('Error fetching user credits:', error);
      return NextResponse.json(
        { error: 'Failed to fetch user credits', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 