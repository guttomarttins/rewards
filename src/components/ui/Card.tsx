/**
 * Card component with Microsoft Fluent design variants
 */

'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'reward' | 'method' | 'testimonial' | 'feature' | 'glass';
  hover?: boolean;
  bordered?: boolean;
  padded?: boolean;
  children: ReactNode;
}

const baseStyles = `
  rounded-2xl transition-all duration-300 ease-out
`;

const variantStyles = {
  default: `
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    shadow-sm hover:shadow-md
  `,
  reward: `
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    shadow-sm hover:shadow-xl hover:shadow-amber-500/10
    hover:border-amber-300 dark:hover:border-amber-700
    relative overflow-hidden
  `,
  method: `
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    shadow-sm hover:shadow-lg
    hover:border-blue-200 dark:hover:border-blue-800
  `,
  testimonial: `
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    shadow-sm
  `,
  feature: `
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    shadow-sm hover:shadow-md
  `,
  glass: `
    glass
    shadow-lg
  `,
};

const hoverStyles = {
  default: 'hover:-translate-y-1',
  reward: 'hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,185,0,0.15)]',
  method: 'hover:-translate-y-1',
  testimonial: '',
  feature: 'hover:-translate-y-0.5',
  glass: 'hover:-translate-y-1',
};

const paddingStyles = {
  default: 'p-6',
  sm: 'p-4',
  lg: 'p-8',
  none: 'p-0',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hover = false,
      bordered = false,
      padded = true,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const paddingClass = padded ? 'p-6 md:p-8' : 'p-0';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          hover && hoverStyles[variant],
          bordered && 'border-2',
          paddingClass,
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card sub-components for structured layouts
 */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, size = 'lg', className = '', ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-lg font-semibold',
      md: 'text-xl font-semibold',
      lg: 'text-2xl font-bold',
      xl: 'text-3xl font-bold',
    };
    return (
      <h3
        ref={ref}
        className={cn(sizeClasses[size], 'text-gray-900 dark:text-white', className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className = '', ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-gray-600 dark:text-gray-400 mt-2', className)}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-6 pt-4 border-t border-gray-200 dark:border-gray-800', className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

/**
 * Badge component for tags/labels
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'gold' | 'new' | 'popular' | 'bonus' | 'blue' | 'green' | 'purple' | 'red';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

const badgeVariantStyles = {
  default: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  gold: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
  new: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
  popular: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border border-pink-200 dark:border-pink-800',
  bonus: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 animate-pulse-soft',
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

const badgeSizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium rounded-full',
        badgeVariantStyles[variant],
        badgeSizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotColorStyles[variant])} aria-hidden="true" />}
      {children}
    </span>
  );
}

const dotColorStyles = {
  default: 'bg-gray-400',
  gold: 'bg-amber-500',
  new: 'bg-blue-500',
  popular: 'bg-pink-500',
  bonus: 'bg-amber-500 animate-pulse',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
};