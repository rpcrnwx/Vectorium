/** @jsxImportSource react */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Vectorium';
    const description = searchParams.get('description') || 
      'Revolutionizing sustainability through blockchain technology and carbon credits trading.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to bottom, #10B981, #059669)',
            padding: '0 80px',
            color: 'white',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>{title}</div>
          <div style={{ fontSize: 32, maxWidth: 800, lineHeight: 1.4 }}>{description}</div>
          <div style={{ display: 'flex', marginTop: 40, alignItems: 'center' }}>
            <div style={{ 
              width: 60, 
              height: 60, 
              borderRadius: '50%', 
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20
            }}>
              <span style={{ color: '#10B981', fontSize: 32, fontWeight: 'bold' }}>V</span>
            </div>
            <span style={{ fontSize: 32, fontWeight: 'bold' }}>vectorium.co</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image Generation Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}