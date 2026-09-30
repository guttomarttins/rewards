/**
 * Header Component - Navigation bar
 */

'use client';

import { useState, useEffect } from 'react';
import { Flex } from '@/components/ui';
import { Icon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <Flex align="center" justify="between" className="h-16 md:h-14">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
            aria-label="Microsoft Rewards Brasil - Início"
          >
            <IconBox name="gift" size="lg" variant="gold" />
            <span className="font-bold text-xl hidden sm:block">
              <span className="rewards-header">Rewards</span>
            </span>
          </a>
        </Flex>
      </nav>
    </header>
  );
}

/**
 * IconBox inline for Header (avoid circular import)
 */
function IconBox({
  name,
  size = 'md',
  variant = 'default',
  className = '',
  children,
}: {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'gold' | 'green' | 'purple' | 'blue' | 'red';
  className?: string;
  children?: React.ReactNode;
}) {
  const iconBoxVariants = {
    default: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    primary: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    gold: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  };

  const boxSizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-xl',
        iconBoxVariants[variant],
        boxSizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      {children || <Icon name={name as any} size={size} />}
    </div>
  );
}