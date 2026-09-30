/**
 * Button component with Microsoft Fluent design variants
 */

'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  pulse?: boolean;
}

const baseStyles = `
  inline-flex items-center justify-center font-medium rounded-lg
  transition-all duration-200 ease-out
  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  active:scale-[0.98]
`;

const variantStyles = {
  primary: `
    bg-blue-600 text-white
    hover:bg-blue-700
    shadow-sm hover:shadow-md
    focus-visible:ring-blue-500
  `,
  secondary: `
    bg-gray-100 text-gray-900
    hover:bg-gray-200
    border border-gray-200
    focus-visible:ring-gray-400
    dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-700
  `,
  ghost: `
    bg-transparent text-gray-700
    hover:bg-gray-100
    focus-visible:ring-gray-400
    dark:text-gray-300 dark:hover:bg-gray-800
  `,
  gold: `
    bg-amber-500 text-gray-900
    hover:bg-amber-400
    shadow-sm hover:shadow-md hover:shadow-amber-500/25
    focus-visible:ring-amber-400
    font-semibold
  `,
  outline: `
    border-2 border-blue-600 text-blue-600
    hover:bg-blue-50
    focus-visible:ring-blue-500
    dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20
  `,
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
  xl: 'px-10 py-4.5 text-xl gap-3',
};

const iconSizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
};

const pulseAnimation = `
  animate-[pulse-soft_2s_ease-in-out_infinite]
  hover:animate-none
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      loading = false,
      fullWidth = false,
      pulse = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          pulse && variant === 'primary' && pulseAnimation,
          className
        )}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <svg
            className={cn('animate-spin', iconSizeStyles[size])}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : icon && iconPosition === 'left' ? (
          <span className={cn('flex-shrink-0', iconSizeStyles[size])} aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span className="truncate">{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className={cn('flex-shrink-0', iconSizeStyles[size])} aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * CTA Button - specialized for main conversion actions
 */
export interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  pulse?: boolean;
  fullWidth?: boolean;
  className?: string;
  'aria-label'?: string;
}

export function CTAButton({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  icon,
  iconPosition = 'right',
  external = false,
  pulse = false,
  fullWidth = false,
  className = '',
  'aria-label': ariaLabel,
  ...props
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) onClick();
    if (href && !e.defaultPrevented) {
      if (external || href.startsWith('http')) {
        e.preventDefault();
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const buttonProps = {
    variant,
    size,
    icon,
    iconPosition,
    pulse,
    fullWidth,
    className,
    'aria-label': ariaLabel,
    ...props,
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          pulse && variant === 'primary' && pulseAnimation,
          className
        )}
        aria-label={ariaLabel}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className={cn('flex-shrink-0', iconSizeStyles[size])} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="truncate">{label}</span>
        {icon && iconPosition === 'right' && (
          <span className={cn('flex-shrink-0', iconSizeStyles[size])} aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <Button
      type="button"
      onClick={onClick}
      {...buttonProps}
    >
      {label}
    </Button>
  );
}