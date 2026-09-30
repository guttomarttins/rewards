/**
 * Testimonials Section - Social proof
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, Badge, Stack, Flex, IconBox } from '@/components/ui';
import { Icon, StarRating } from '@/components/ui/Icons';
import { TESTIMONIALS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { IconName } from '@/lib/types';

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    // Resume auto-play after 10s
    setTimeout(() => setAutoPlay(true), 10000);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % TESTIMONIALS.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [currentIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de usuários"
      className={cn('bg-gray-50 dark:bg-gray-900 py-20 md:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" size="md" className="mb-4" dot>
            Prova Social
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            O que dizem <span className="text-amber-600 dark:text-amber-400">quem já usa</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Mais de 2 milhões de brasileiros já ganham recompensas reais todo mês.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="list"
              aria-label="Depoimentos"
            >
              {TESTIMONIALS.map((t, index) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4" role="listitem">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/40"
            aria-label="Depoimento anterior"
            aria-controls="testimonial-carousel"
          >
            <Icon name="chevron-left" size="lg" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/40"
            aria-label="Próximo depoimento"
            aria-controls="testimonial-carousel"
          >
            <Icon name="chevron-right" size="lg" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação de depoimentos">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900',
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                )}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <StatItem value="4.8/5" label="Avaliação média" icon="star" color="amber" />
          <StatItem value="2M+" label="Usuários ativos" icon="users" color="blue" />
          <StatItem value="100%" label="Grátis para sempre" icon="gift" color="green" />
          <StatItem value="1.320" label="Pts boas-vindas" icon="award" color="purple" />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card variant="testimonial" className="h-full">
      <CardContent className="pt-8 pb-6">
        {/* Stars */}
        <StarRating rating={testimonial.rating} size="lg" className="mb-4" />

        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>

        {/* Resgated reward badge */}
        <Badge variant="gold" size="sm" className="mb-4">
          <Icon name="gift" size="xs" />
          Resgatou: {testimonial.reward}
        </Badge>

        {/* Author */}
        <Flex align="center" gap="md">
          <div className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0',
            getAvatarColor(testimonial.name)
          )}>
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 dark:text-white truncate">{testimonial.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.location} • {testimonial.timeAgo}
            </p>
          </div>
        </Flex>
      </CardContent>
    </Card>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  icon: IconName;
  color: 'amber' | 'blue' | 'green' | 'purple';
}

const statColors = {
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
};

function StatItem({ value, label, icon, color }: StatItemProps) {
  return (
    <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <IconBox name={icon} size="xl" variant={color} className="mx-auto mb-3" />
      <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
    </div>
  );
}

function getAvatarColor(name: string): string {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500',
    'bg-amber-500', 'bg-pink-500', 'bg-indigo-500',
    'bg-teal-500', 'bg-orange-500', 'bg-red-500',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}