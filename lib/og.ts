export const generateOgImageUrl = (title: string, description: string): string => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vectorium.vercel.app';
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    return `${siteUrl}/api/og?title=${encodedTitle}&description=${encodedDescription}`;
  };