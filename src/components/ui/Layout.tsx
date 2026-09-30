/**
 * Layout components: Container, Section, Grid, Stack
 */

'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Container - max-width wrapper with responsive padding
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: ReactNode;
}

const containerMaxWidths = {
  sm: 'max-w-3xl',      // 48rem / 768px
  md: 'max-w-5xl',      // 64rem / 1024px
  lg: 'max-w-7xl',      // 80rem / 1280px
  xl: 'max-w-[90rem]',  // 1440px
  full: 'max-w-full',
};

const containerPadding = {
  base: 'px-4 sm:px-6 lg:px-8',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'lg', className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mx-auto w-full',
        containerMaxWidths[size],
        containerPadding.base,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = 'Container';

/**
 * Section - vertical spacing wrapper with optional background
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  variant?: 'default' | 'alternate' | 'hero' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sectionPadding = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

const sectionVariants = {
  default: 'bg-white dark:bg-gray-950',
  alternate: 'bg-gray-50 dark:bg-gray-900',
  hero: 'bg-gradient-hero',
  cta: 'bg-blue-600 dark:bg-blue-700 text-white',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({
    children,
    id,
    variant = 'default',
    size = 'lg',
    className = '',
    'aria-label': ariaLabel,
    ...props
  }, ref) => (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={cn(
        sectionPadding[size],
        sectionVariants[variant],
        className
      )}
      {...props}
    >
      <Container size="lg">
        {children}
      </Container>
    </section>
  )
);

Section.displayName = 'Section';

/**
 * Grid - responsive grid layout
 */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5',
  6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
};

const gridGap = {
  none: 'gap-0',
  sm: 'gap-3',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, cols = 3, gap = 'md', responsive = true, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid',
        responsive && gridCols[cols],
        !responsive && `grid-cols-${cols}`,
        gridGap[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Grid.displayName = 'Grid';

/**
 * Stack - vertical/horizontal spacing between children
 */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  divider?: ReactNode;
}

const stackGap = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-3',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
  '2xl': 'gap-16',
};

const stackAlign = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const stackJustify = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({
    children,
    direction = 'vertical',
    gap = 'md',
    align = 'stretch',
    justify = 'start',
    wrap = false,
    divider,
    className = '',
    ...props
  }, ref) => {
    const childrenArray = typeof children === 'object' && children !== null && 'props' in children
      ? [children]
      : Array.isArray(children)
        ? children
        : [children];

    const childrenWithDividers = divider && childrenArray.length > 1
      ? childrenArray.flatMap((child, index) => [
          child,
          index < childrenArray.length - 1
            ? <div key={`divider-${index}`} className="w-full h-px bg-gray-200 dark:bg-gray-800" aria-hidden="true" />
            : null,
        ])
      : childrenArray;

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          wrap && 'flex-wrap',
          stackGap[gap],
          stackAlign[align],
          stackJustify[justify],
          className
        )}
        {...props}
      >
        {childrenWithDividers}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

/**
 * Flex - simple flex container
 */
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gap?: keyof typeof stackGap;
  align?: keyof typeof stackAlign;
  justify?: keyof typeof stackJustify;
  wrap?: boolean;
  column?: boolean;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({
    children,
    gap = 'md',
    align = 'stretch',
    justify = 'start',
    wrap = false,
    column = false,
    className = '',
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex',
        column ? 'flex-col' : 'flex-row',
        wrap && 'flex-wrap',
        stackGap[gap],
        stackAlign[align],
        stackJustify[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Flex.displayName = 'Flex';

/**
 * Visually hidden element (for accessibility)
 */
export function VisuallyHidden({ children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      }}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Skip to main content link
 */
export function SkipLink({ href = '#main-content', children = 'Pular para o conteúdo principal' }: { href?: string; children?: string }) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium focus:shadow-lg"
    >
      {children}
    </a>
  );
}