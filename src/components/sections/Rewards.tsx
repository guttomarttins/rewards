/**
 * Rewards Section - Shows available rewards for redemption
 */

'use client';

import { Card, CardContent, Badge, IconBox, Grid, Stack } from '@/components/ui';
import { Icon } from '@/components/ui/Icons';
import { REWARDS } from '@/lib/constants';
import { formatNumber, cn } from '@/lib/utils';

interface RewardsProps {
  className?: string;
}

export function Rewards({ className }: RewardsProps) {
  return (
    <section
      id="recompensas"
      aria-label="Recompensas disponíveis"
      className={cn('py-20 md:py-24 bg-gray-50 dark:bg-gray-900', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" size="md" className="mb-4" dot>
            Recompensas Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha como resgatar seus pontos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            De Xbox Game Pass a Spotify Premium, Gift Cards Amazon e muito mais.
            Todos disponíveis no Brasil, sem pegadinha.
          </p>
        </div>

        {/* Rewards Grid */}
        <Grid cols={3} gap="lg" className="mb-12">
          {REWARDS.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </Grid>

        {/* Additional note */}
        <div className="text-center text-gray-500 dark:text-gray-500">
          <Icon name="info" size="sm" className="inline-block mr-2" />
          <span>Mais de 50 opções de resgate disponíveis no painel oficial. Valores de pontos sujeitos a alteração.</span>
        </div>
      </div>
    </section>
  );
}

interface RewardCardProps {
  reward: typeof REWARDS[0];
}

function RewardCard({ reward }: RewardCardProps) {
  const isCustom = reward.custom;

  return (
    <Card
      variant="reward"
      hover
      className="group h-full flex flex-col"
      role="article"
      aria-label={`${reward.name} - ${reward.pointsCost > 0 ? formatNumber(reward.pointsCost) + ' pontos' : 'Resgate personalizado'}`}
    >
      {/* Icon + Badges */}
      <div className="flex items-start justify-between mb-4">
        <IconBox
          name={reward.icon}
          size="xl"
          variant={reward.color as any || 'primary'}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <div className="flex flex-col items-end gap-1">
          {reward.new && <Badge variant="new" size="sm">NOVO</Badge>}
          {reward.popular && <Badge variant="popular" size="sm" dot>MAIS RESGATADO</Badge>}
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-3">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {reward.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {reward.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
          {reward.description}
        </p>

        {/* Points Cost / Value */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          {isCustom ? (
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                <Icon name="gift" size="sm" className="inline mr-1" />
                Resgate personalizado
              </span>
              <Badge variant="gold" size="sm">
                <Icon name="arrow-right" size="xs" />
                Ver opções
              </Badge>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconBox name="coin" size="sm" variant="gold" />
                <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {formatNumber(reward.pointsCost)}
                </span>
                <span className="text-gray-500 dark:text-gray-400">pontos</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Valor estimado</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">
                  R$ {reward.estimatedValue.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}