import React from 'react';

export function BowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Signature Bow"
    >
      {/* Central Knot */}
      <circle cx="12" cy="10" r="1.8" fill="currentColor" />
      {/* Left Loop */}
      <path
        d="M10.2 9.5 C7.5 6 3 6.8 3.5 10.5 C3.8 13.5 7.8 12.8 10.3 10.8"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Right Loop */}
      <path
        d="M13.8 9.5 C16.5 6 21 6.8 20.5 10.5 C20.2 13.5 16.2 12.8 13.7 10.8"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Left Ribbon Tail */}
      <path d="M10.8 11.5 C9.5 14.5 7.5 17.5 6 20 C7.5 19 9 18.2 10.5 18 C11.2 16 11.5 14 11.8 12" />
      {/* Right Ribbon Tail */}
      <path d="M13.2 11.5 C14.5 14.5 16.5 17.5 18 20 C16.5 19 15 18.2 13.5 18 C12.8 16 12.5 14 12.2 12" />
    </svg>
  );
}

export function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="TikTok"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.94.04 2 .69 2.71.62.72 1.61 1.1 2.54 1.05 1.12-.01 2.18-.62 2.67-1.63.26-.52.37-1.1.37-1.69V.02h.23z" />
    </svg>
  );
}

