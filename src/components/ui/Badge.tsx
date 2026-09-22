import { type HTMLAttributes } from 'react';

type BadgeVariant = 'red' | 'slate';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  red: 'bg-cardinal-red/15 text-cardinal-muted border-cardinal-red/30',
  slate: 'bg-white/6 text-slate-400 border-white/10',
};

export function Badge({
  variant = 'slate',
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
