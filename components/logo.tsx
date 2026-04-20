export function Logo({ className = 'logo-mark' }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 120 120" fill="none" width="100%" height="100%" aria-hidden="true">
        <defs>
          <linearGradient id="guilda-gradient" x1="12" y1="8" x2="102" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" />
            <stop offset="0.55" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path d="M60 10 102 32v30c0 24.8-16.2 40.8-42 48C34.2 102.8 18 86.8 18 62V32L60 10Z" fill="url(#guilda-gradient)" />
        <path d="M40 44c0-7.7 6.3-14 14-14h12c7.7 0 14 6.3 14 14v4H68v-3c0-2.8-2.2-5-5-5h-6c-2.8 0-5 2.2-5 5v4l28 9.2v7.3c0 7.7-6.3 14-14 14H54c-7.7 0-14-6.3-14-14v-4h12v3c0 2.8 2.2 5 5 5h6c2.8 0 5-2.2 5-5v-4L40 51.3V44Z" fill="#F8FAFC" />
      </svg>
    </div>
  );
}
