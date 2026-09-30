/**
 * How It Works Section - The 3 pillars of earning points
 */

'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, IconBox, Grid, Stack, Flex } from '@/components/ui';
import { Icon } from '@/components/ui/Icons';
import { EARNING_METHODS, COMBINED_POTENTIAL } from '@/lib/constants';
import { cn, formatNumber } from '@/lib/utils';

interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section
      id="como-funciona"
      aria-label="Como ganhar pontos - Os 3 pilares"
      className={cn('bg-gray-50 dark:bg-gray-900 py-20 md:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" size="md" className="mb-4" dot>
            O Segredo dos Power Users
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Combine 3 fontes e ganhe <span className="text-blue-600 dark:text-blue-400">300-500 pts/dia</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Não dependa de apenas uma fonte. Quem ganha muito usa Edge + Xbox + Dashboard todos os dias.
          </p>
        </div>

        {/* Combined Potential Highlight */}
        <div className="mb-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white">
          <Stack gap="xl" direction="horizontal" align="center" justify="center" wrap className="text-center">
            <div>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wide">Potencial Conservador</p>
              <p className="text-3xl md:text-4xl font-bold">{formatNumber(COMBINED_POTENTIAL.conservative.monthly)} pts/mês</p>
              <p className="text-sm opacity-70">~R$ 150 em recompensas</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wide">Potencial Médio</p>
              <p className="text-3xl md:text-4xl font-bold">{formatNumber(COMBINED_POTENTIAL.average.monthly)} pts/mês</p>
              <p className="text-sm opacity-70">~R$ 300 em recompensas</p>
            </div>
          </Stack>
        </div>

        {/* Three Pillars Grid */}
        <Grid cols={3} gap="lg" className="mb-16">
          {EARNING_METHODS.map((method) => (
            <MethodCard key={method.id} method={method} />
          ))}
        </Grid>

        {/* Synergy Message */}
        <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconBox name="zap" size="lg" variant="gold" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              A Mágica Acontece Quando Combina
            </h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Cada fonte sozinha é boa. Juntas, se multiplicam. O streak do dashboard aumenta
            seus pontos de busca. As missões do Game Pass dão pontos extras por jogar.
            O Edge no mobile dobra seus pontos de busca.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Icon name="check" size="xs" className="text-green-500" />
              Buscas PC + Mobile = 250 pts/dia
            </span>
            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Icon name="check" size="xs" className="text-green-500" />
              Quiz + Streak = 100 pts/dia
            </span>
            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Icon name="check" size="xs" className="text-green-500" />
              Xbox Quests = 50-500 pts/semana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MethodCardProps {
  method: typeof EARNING_METHODS[0];
}

const methodColors = {
  blue: { primary: 'blue', light: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', iconVariant: 'primary' as const },
  green: { primary: 'green', light: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', iconVariant: 'green' as const },
  purple: { primary: 'purple', light: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', iconVariant: 'purple' as const },
  gold: { primary: 'gold', light: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800', iconVariant: 'gold' as const },
  red: { primary: 'red', light: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', iconVariant: 'red' as const },
};

function MethodCard({ method }: MethodCardProps) {
  const colors = methodColors[method.color];

  return (
    <Card
      variant="method"
      hover
      className={cn('h-full flex flex-col', colors.light, colors.border)}
      role="article"
      aria-label={`${method.title} - ${method.dailyPotential}`}
    >
      {/* Header with Icon */}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <IconBox
            name={method.icon}
            size="2xl"
            variant={colors.iconVariant}
            className="flex-shrink-0"
          />
          <Badge variant={method.color} size="sm" dot>
            {method.dailyPotential}
          </Badge>
        </div>

        <CardTitle size="lg" className="text-gray-900 dark:text-white">
          {method.title}
        </CardTitle>
        <CardDescription>{method.description}</CardDescription>
      </CardHeader>

      {/* Activities List */}
      <CardContent className="flex-1">
        <ul className="space-y-3" role="list" aria-label={`Atividades de ${method.title}`}>
          {method.activities.map((activity, index) => (
            <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors">
              <IconBox name={activity.icon} size="sm" variant={colors.iconVariant} className="flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 dark:text-white text-sm">{activity.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{activity.points}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Footer with Tip & Monthly Potential */}
      <CardFooter className="border-t border-gray-200 dark:border-gray-800 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">Mensal estimado:</span>
          <span className="font-bold text-gray-900 dark:text-white">{method.monthlyPotential}</span>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
          <Icon name={method.tipIcon} size="sm" className={cn('flex-shrink-0 mt-0.5', method.color === 'blue' && 'text-blue-500', method.color === 'green' && 'text-green-500', method.color === 'purple' && 'text-purple-500')} />
          <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Dica:</strong> {method.tip}</p>
        </div>
      </CardFooter>
    </Card>
  );
}