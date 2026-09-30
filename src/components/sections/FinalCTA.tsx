/**
 * Final CTA Section - Bottom conversion driver
 */

'use client';

import { CTAButton, Stack, Badge, Flex, IconBox } from '@/components/ui';
import { Icon, AnimatedIcon } from '@/components/ui/Icons';
import { REFERRAL_URL, WELCOME_BONUS_POINTS } from '@/lib/constants';
import { trackFinalCTAClick, openReferralLink } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps) {
  const handleClick = () => {
    trackFinalCTAClick();
    openReferralLink();
  };

  return (
    <section
      id="cta-final"
      aria-label="Chamada final para ação"
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 md:py-24 lg:py-28',
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pattern-grid opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Stack gap="lg" align="center" className="max-w-3xl mx-auto">

          {/* Badge */}
          <div className="animate-slide-up">
            <Badge variant="gold" size="lg" dot className="px-4 py-2">
              <span className="flex items-center gap-2">
                <AnimatedIcon name="sparkles" size="sm" animation="pulse" />
                ÚLTIMA CHANCE: BÔNUS DE BOAS-VINDAS
                <AnimatedIcon name="sparkles" size="sm" animation="pulse" />
              </span>
            </Badge>
          </div>

          {/* Headline */}
          <div className="text-center animate-slide-up delay-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              🎯 PRONTO PARA COMEÇAR A GANHAR?
            </h2>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up delay-200 max-w-xl mx-auto text-center">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Clique no botão abaixo, faça seu cadastro rápido
              e garanta seus <strong className="text-amber-300">{WELCOME_BONUS_POINTS.toLocaleString('pt-BR')} pontos</strong>
              de boas-vindas <strong className="text-amber-300">HOJE</strong>.
            </p>
          </div>

          {/* Benefits row */}
          <div className="animate-slide-up delay-300 w-full">
            <Flex align="center" justify="center" gap="lg" wrap className="mb-4">
              <div className="flex items-center gap-2 text-blue-100">
                <IconBox name="check" size="sm" variant="gold" />
                <span className="font-medium">Leva 30 segundos</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <IconBox name="lock" size="sm" variant="gold" />
                <span className="font-medium">Sem cartão</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <IconBox name="zap" size="sm" variant="gold" />
                <span className="font-medium">Começa na hora</span>
              </div>
            </Flex>
          </div>

          {/* Primary CTA */}
          <div className="animate-slide-up delay-400 w-full max-w-xl">
            <CTAButton
              label="🚀 SIM, QUERO MEUS 1.320 PONTOS AGORA"
              href={REFERRAL_URL}
              variant="gold"
              size="xl"
              fullWidth
              pulse
              icon={<AnimatedIcon name="arrow-right" size="xl" animation="bounce" />}
              iconPosition="right"
              external
              onClick={handleClick}
              aria-label="Clique para ganhar 1.320 pontos de boas-vindas no Microsoft Rewards"
            />
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in delay-500 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-blue-100">
            <Flex align="center" gap="sm">
              <Icon name="shield" size="sm" />
              <span>Seguro e oficial</span>
            </Flex>
            <Flex align="center" gap="sm">
              <Icon name="globe" size="sm" />
              <span>Funciona no Brasil</span>
            </Flex>
            <Flex align="center" gap="sm">
              <Icon name="users" size="sm" />
              <span>2M+ usuários</span>
            </Flex>
          </div>

        </Stack>
      </div>
    </section>
  );
}