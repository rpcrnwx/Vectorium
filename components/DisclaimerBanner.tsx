"use client";

import { usePathname } from 'next/navigation';

export default function DisclaimerBanner() {
  const pathname = usePathname();
  const showDisclaimer = !['/', '/auth/login', '/auth/signup'].includes(pathname);

  if (!showDisclaimer) return null;

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fffbe6',
      color: '#ad8b00',
      padding: '8px 0',
      textAlign: 'center',
      fontSize: '14px',
      borderTop: '1px solid #ffe58f',
      zIndex: 2000
    }}>
      All data used in this application is for <b>testing and development purposes only</b>.
    </div>
  );
} 