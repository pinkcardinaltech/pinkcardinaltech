import { type HTMLAttributes } from 'react';

type BadgeVariant = 'pink' | 'gold' | 'slate' | 'coral';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  pink: 'bg-cardinal-pink/15 text-cardinal-coral border-cardinal-pink/30',
  gold: 'bg-cardinal-gold/15 text-cardinal-amber border-cardinal-gold/30',
  slate: 'bg-white/8 text-slate-300 border-white/12',
  coral: 'bg-cardinal-coral/15 text-cardinal-coral border-cardinal-coral/30',
};

export function Badge({
  variant = 'pink',
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}
