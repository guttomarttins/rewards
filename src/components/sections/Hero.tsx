/**
 * Hero Section - Above the fold, main conversion driver
 */

'use client';

import { CTAButton, Stack, Badge, Container } from '@/components/ui';
import { Icon, AnimatedIcon } from '@/components/ui/Icons';
import { HERO_CONTENT, REFERRAL_URL } from '@/lib/constants';
import { trackHeroCTAClick, trackEvent, openReferralLink } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const handlePrimaryClick = () => {
    trackHeroCTAClick('primary');
    openReferralLink();
  };

  const handleSecondaryClick = () => {
    trackHeroCTAClick('secondary');
    trackEvent({
      event_name: 'scroll_to_section',
      parameters: { section: 'como-funciona' },
    });
  };

  return (
    <section
      id="hero"
      aria-label="Hero - Microsoft Rewards Boas-vindas"
      className={cn(
        'relative overflow-hidden bg-gradient-hero py-20 md:py-28 lg:py-32',
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent" aria-hidden="true" />

      <Container size="lg">
        <Stack gap="lg" align="center" className="relative z-10">

          {/* Badge - Welcome Bonus */}
          <div className="animate-slide-up delay-100">
            <Badge variant="bonus" size="lg" dot className="px-4 py-2">
              <span className="flex items-center gap-2">
                <AnimatedIcon name="sparkles" size="sm" animation="pulse" />
                {HERO_CONTENT.badge}
                <AnimatedIcon name="sparkles" size="sm" animation="pulse" />
              </span>
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="text-center animate-slide-up delay-200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance max-w-4xl mx-auto">
              {HERO_CONTENT.headline}
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up delay-300 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed text-center">
              {HERO_CONTENT.subheadline}
            </p>
          </div>

          {/* Bonus Highlight Box */}
          <div className="animate-slide-up delay-400 w-full max-w-xl">
            <div
              className={cn(
                'relative rounded-2xl p-6 md:p-8',
                'bg-gradient-to-br from-amber-50 via-white to-amber-50',
                'border-2 border-amber-200',
                'shadow-lg shadow-amber-500/10'
              )}
              role="region"
              aria-label="Destaque do bônus de boas-vindas"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-full" aria-hidden="true" />

              <Stack gap="md" align="center" className="relative">
                <div className="flex items-center gap-3">
                  <IconBox name="coin" size="lg" variant="gold" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-700">
                      BÔNUS IMEDIATO AO CADASTRAR
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-amber-600">
                      +{HERO_CONTENT.bonusHighlight.points.toLocaleString('pt-BR')} <span className="text-lg font-normal">PONTOS</span>
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center">
                  {HERO_CONTENT.bonusHighlight.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2 border-t border-amber-200">
                  <Icon name="check" size="xs" className="text-amber-500" />
                  <span>Missão leva ~2 minutos</span>
                  <Icon name="check" size="xs" className="text-amber-500" />
                  <span>Pontos creditados na hora</span>
                  <Icon name="check" size="xs" className="text-amber-500" />
                  <span>Sem cartão de crédito</span>
                </div>
              </Stack>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="animate-slide-up delay-500 w-full max-w-xl">
            <Stack gap="lg" direction="vertical" align="center">
              <CTAButton
                label={HERO_CONTENT.ctaPrimary.label}
                href={HERO_CONTENT.ctaPrimary.href}
                variant="gold"
                size="xl"
                fullWidth
                pulse
                icon={<AnimatedIcon name="arrow-right" size="lg" animation="bounce" />}
                iconPosition="right"
                external
                onClick={handlePrimaryClick}
                aria-label="Clique para ganhar 1.320 pontos de boas-vindas no Microsoft Rewards"
              />

              <CTAButton
                label={HERO_CONTENT.ctaSecondary.label}
                href={HERO_CONTENT.ctaSecondary.href}
                variant={HERO_CONTENT.ctaSecondary.variant}
                size="lg"
                fullWidth
                icon={<Icon name="chevron-right" size="md" />}
                iconPosition="right"
                onClick={handleSecondaryClick}
                aria-label="Saiba como funciona o Microsoft Rewards"
              />
            </Stack>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in delay-600 w-full">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
              {HERO_CONTENT.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-blue-100">
                  <Icon name="check" size="xs" className="text-green-400 shrink-0" aria-hidden={true} />
                  <span className="font-semibold text-white">{indicator.label}</span>
                  <span className="hidden sm:inline">{indicator.description}</span>
                </div>
              ))}
            </div>
          </div>

        </Stack>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <Icon name="chevron-down" size="xl" className="text-blue-200" />
      </div>
    </section>
  );
}

/**
 * IconBox helper for Hero (reuses the one from Icons but with inline styles to avoid circular deps)
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