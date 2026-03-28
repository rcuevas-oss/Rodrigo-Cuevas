import * as React from 'react';
import { APP_NAME } from '../constants';
import { cn } from '@/lib/utils';

type BrandTone = 'dark' | 'light';

interface BrandMarkProps {
  className?: string;
}

interface BrandLogoProps {
  className?: string;
  iconClassName?: string;
  showSubtitle?: boolean;
  subtitle?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  tone?: BrandTone;
}

export function BrandMark({ className }: BrandMarkProps) {
  const id = React.useId();
  const backgroundId = `${id}-background`;
  const borderId = `${id}-border`;

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn('h-10 w-10 shrink-0 sm:h-11 sm:w-11', className)}
    >
      <defs>
        <linearGradient id={backgroundId} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#101827" />
          <stop offset="58%" stopColor="#172436" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id={borderId} x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.24)" />
          <stop offset="100%" stopColor="rgba(199,255,99,0.22)" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="18" fill={`url(#${backgroundId})`} />
      <rect x="4.5" y="4.5" width="55" height="55" rx="17.5" stroke={`url(#${borderId})`} />
      <rect x="40" y="9" width="13" height="13" rx="6.5" fill="#c7ff63" fillOpacity="0.94" />

      <path
        d="M26 22 16.5 32 26 42"
        fill="none"
        stroke="#eef6ff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 22 47.5 32 38 42"
        fill="none"
        stroke="#eef6ff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 19 29 45"
        fill="none"
        stroke="#7ee0ff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BrandLogo({
  className,
  iconClassName,
  showSubtitle = true,
  subtitle = 'Software a medida · Ecommerce · Automatización',
  subtitleClassName,
  titleClassName,
  tone = 'dark',
}: BrandLogoProps) {
  const titleTone = tone === 'light' ? 'text-white' : 'text-foreground';
  const subtitleTone = tone === 'light' ? 'text-white/70' : 'text-muted-foreground';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <BrandMark className={iconClassName} />

      <div className="leading-none">
        <span
          className={cn(
            'block text-base font-semibold tracking-[-0.045em] sm:text-lg',
            titleTone,
            titleClassName,
          )}
        >
          <span className="mr-1 font-medium opacity-70">La</span>
          <span className="font-black">{APP_NAME.replace(/^La\s+/i, '')}</span>
        </span>

        {showSubtitle && (
          <span
            className={cn(
              'mt-1 block text-[11px] font-medium tracking-[0.02em]',
              subtitleTone,
              subtitleClassName,
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
