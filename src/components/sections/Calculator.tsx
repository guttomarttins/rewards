/**
 * Calculator Section - Interactive points estimator
 */

'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Button, Stack, Flex, Grid, IconBox } from '@/components/ui';
import { Icon } from '@/components/ui/Icons';
import {
  DEFAULT_CALCULATOR_PROFILE,
  CALCULATOR_PRESETS,
  POINTS_PER_ACTIVITY,
  MONTHLY_REWARDS_EXAMPLES,
} from '@/lib/constants';
import { formatNumber, cn } from '@/lib/utils';
import { trackCalculatorInteraction, trackEvent } from '@/lib/analytics';
import type { CalculatorProfile, CalculatorResult, ActivityBreakdown, AchievableReward, IconName } from '@/lib/types';

interface CalculatorProps {
  className?: string;
}

export function Calculator({ className }: CalculatorProps) {
  const [profile, setProfile] = useState<CalculatorProfile>(DEFAULT_CALCULATOR_PROFILE);
  const [activePreset, setActivePreset] = useState<string>('casual');
  const [showResult, setShowResult] = useState(false);

  // Calculate results
  const result = useMemo((): CalculatorResult => {
    const breakdown: ActivityBreakdown[] = [
      {
        name: 'Buscas no PC (Edge)',
        dailyPoints: profile.dailySearches ? POINTS_PER_ACTIVITY.dailySearchesPC : 0,
        monthlyPoints: profile.dailySearches ? POINTS_PER_ACTIVITY.dailySearchesPC * 30 : 0,
        enabled: profile.dailySearches,
      },
      {
        name: 'Buscas no Mobile (Edge)',
        dailyPoints: profile.mobileSearches ? POINTS_PER_ACTIVITY.dailySearchesMobile : 0,
        monthlyPoints: profile.mobileSearches ? POINTS_PER_ACTIVITY.dailySearchesMobile * 30 : 0,
        enabled: profile.mobileSearches,
      },
      {
        name: 'Quiz Diário',
        dailyPoints: profile.dailyQuizzes ? POINTS_PER_ACTIVITY.dailyQuiz : 0,
        monthlyPoints: profile.dailyQuizzes ? POINTS_PER_ACTIVITY.dailyQuiz * 30 : 0,
        enabled: profile.dailyQuizzes,
      },
      {
        name: 'Missões Semanais (Game Pass)',
        dailyPoints: profile.weeklyQuests ? POINTS_PER_ACTIVITY.weeklyQuest : 0,
        monthlyPoints: profile.weeklyQuests ? POINTS_PER_ACTIVITY.weeklyQuest * 30 : 0,
        enabled: profile.weeklyQuests,
      },
      {
        name: 'Streak Bônus (7/30/60 dias)',
        dailyPoints: profile.streakBonus
          ? POINTS_PER_ACTIVITY.streakBonus7 + POINTS_PER_ACTIVITY.streakBonus30 + POINTS_PER_ACTIVITY.streakBonus60
          : 0,
        monthlyPoints: profile.streakBonus
          ? (POINTS_PER_ACTIVITY.streakBonus7 + POINTS_PER_ACTIVITY.streakBonus30 + POINTS_PER_ACTIVITY.streakBonus60) * 30
          : 0,
        enabled: profile.streakBonus,
      },
      {
        name: 'Conquistas Xbox',
        dailyPoints: profile.xboxPlayer ? POINTS_PER_ACTIVITY.xboxAchievements : 0,
        monthlyPoints: profile.xboxPlayer ? POINTS_PER_ACTIVITY.xboxAchievements * 30 : 0,
        enabled: profile.xboxPlayer,
      },
      {
        name: 'Game Pass Quests',
        dailyPoints: profile.xboxPlayer && profile.weeklyQuests ? POINTS_PER_ACTIVITY.xboxGamePassQuests : 0,
        monthlyPoints: profile.xboxPlayer && profile.weeklyQuests ? POINTS_PER_ACTIVITY.xboxGamePassQuests * 30 : 0,
        enabled: profile.xboxPlayer && profile.weeklyQuests,
      },
      {
        name: 'Xbox Cloud Gaming',
        dailyPoints: profile.xboxPlayer ? POINTS_PER_ACTIVITY.xboxCloudGaming : 0,
        monthlyPoints: profile.xboxPlayer ? POINTS_PER_ACTIVITY.xboxCloudGaming * 30 : 0,
        enabled: profile.xboxPlayer,
      },
      {
        name: 'Compras na Microsoft Store',
        dailyPoints: POINTS_PER_ACTIVITY.edgeShopping,
        monthlyPoints: POINTS_PER_ACTIVITY.edgeShopping * 30,
        enabled: true,
      },
    ];

    const dailyPoints = breakdown.reduce((sum, item) => sum + item.dailyPoints, 0);
    const monthlyPoints = breakdown.reduce((sum, item) => sum + item.monthlyPoints, 0);
    const yearlyPoints = monthlyPoints * 12;

    // Calculate achievable rewards
    const achievableRewards: AchievableReward[] = MONTHLY_REWARDS_EXAMPLES.map((reward) => ({
      ...reward,
      pointsCost: reward.points,
      monthsToRedeem: Math.ceil(reward.points / monthlyPoints),
    }));

    return { dailyPoints, monthlyPoints, yearlyPoints, breakdown, achievableRewards };
  }, [profile]);

  // Handle preset changes
  const handlePresetChange = (presetKey: string) => {
    const preset = CALCULATOR_PRESETS[presetKey];
    if (preset) {
      setProfile(preset);
      setActivePreset(presetKey);
      trackCalculatorInteraction('preset_change', { preset: presetKey });
    }
  };

  // Handle individual toggle
  const handleToggle = (key: keyof CalculatorProfile) => {
    setProfile((prev) => ({ ...prev, [key]: !prev[key] }));
    trackCalculatorInteraction('toggle', { activity: key, enabled: !profile[key] });
  };

  // Handle calculate button
  const handleCalculate = () => {
    setShowResult(true);
    trackCalculatorInteraction('calculate', {
      dailyPoints: result.dailyPoints,
      monthlyPoints: result.monthlyPoints,
      activePreset,
    });

    // Scroll to result
    setTimeout(() => {
      const resultEl = document.getElementById('calculator-result');
      resultEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  // Track profile changes for analytics
  useEffect(() => {
    if (showResult) {
      trackEvent({
        event_name: 'calculator_profile_change',
        parameters: {
          daily_searches: profile.dailySearches,
          xbox_player: profile.xboxPlayer,
          edge_user: profile.edgeUser,
          mobile_searches: profile.mobileSearches,
          daily_quizzes: profile.dailyQuizzes,
          weekly_quests: profile.weeklyQuests,
          streak_bonus: profile.streakBonus,
          estimated_monthly: result.monthlyPoints,
        },
      });
    }
  }, [profile, result.monthlyPoints, showResult]);

  return (
    <section
      id="calculadora"
      aria-label="Calculadora de ganhos potenciais"
      className={cn('bg-white dark:bg-gray-950 py-20 md:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="purple" size="md" className="mb-4" dot>
            Calculadora de Potencial
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Quanto você pode ganhar <span className="text-purple-600 dark:text-purple-400">por mês</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Marque as atividades que você faria e veja a estimativa personalizada.
          </p>
        </div>

        <Grid cols={2} gap="xl" className="items-start">
          {/* Input Panel */}
          <div className="sticky top-24">
            <Card variant="glass" className="p-6 md:p-8">
              <CardHeader className="pb-6">
                <Flex align="center" justify="between" wrap gap="md" className="mb-6">
                  <div>
                    <CardTitle size="lg">Seu Perfil</CardTitle>
                    <CardDescription>Marque o que você faria regularmente</CardDescription>
                  </div>
                  <Badge variant={activePreset === 'casual' ? 'gold' : 'default'} size="sm" className="cursor-pointer hover:opacity-80"
                    onClick={() => handlePresetChange('casual')}>
                    Casual
                  </Badge>
                </Flex>

                {/* Preset Buttons */}
                <Flex gap="sm" wrap className="mb-6" role="group" aria-label="Perfis pré-definidos">
                  {Object.entries(CALCULATOR_PRESETS).map(([key, preset]) => (
                    <Button
                      key={key}
                      variant={activePreset === key ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => handlePresetChange(key)}
                      className="whitespace-nowrap"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Button>
                  ))}
                </Flex>
              </CardHeader>

              <CardContent className="space-y-4">
                {[
                  { key: 'dailySearches', label: 'Buscas diárias no PC (Edge)', icon: 'search' as IconName, points: POINTS_PER_ACTIVITY.dailySearchesPC, desc: 'Até 30 buscas/dia' },
                  { key: 'mobileSearches', label: 'Buscas no celular (Edge)', icon: 'smartphone' as IconName, points: POINTS_PER_ACTIVITY.dailySearchesMobile, desc: 'Até 20 buscas/dia' },
                  { key: 'dailyQuizzes', label: 'Quiz diário no painel', icon: 'help-circle' as IconName, points: POINTS_PER_ACTIVITY.dailyQuiz, desc: '3 perguntas rápidas' },
                  { key: 'weeklyQuests', label: 'Missões semanais Game Pass', icon: 'target' as IconName, points: POINTS_PER_ACTIVITY.weeklyQuest, desc: 'Quests do Xbox Game Pass' },
                  { key: 'streakBonus', label: 'Bônus de streak (7/30/60 dias)', icon: 'flame' as IconName, points: POINTS_PER_ACTIVITY.streakBonus7 + POINTS_PER_ACTIVITY.streakBonus30 + POINTS_PER_ACTIVITY.streakBonus60, desc: 'Login consecutivo' },
                  { key: 'xboxPlayer', label: 'Jogo no Xbox / Game Pass', icon: 'gamepad' as IconName, points: POINTS_PER_ACTIVITY.xboxAchievements, desc: 'Conquistas + quests + cloud' },
                ].map((item) => (
                  <ToggleRow
                    key={item.key}
                    checked={profile[item.key as keyof CalculatorProfile]}
                    onChange={() => handleToggle(item.key as keyof CalculatorProfile)}
                    label={item.label}
                    icon={item.icon}
                    points={item.points}
                    description={item.desc}
                  />
                ))}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    onClick={handleCalculate}
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Icon name="calculator" size="md" />}
                  >
                    Calcular Meu Potencial
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Result Panel */}
          <div id="calculator-result" className={cn(showResult ? 'animate-slide-up' : '')}>
            <Card variant="glass" className="p-6 md:p-8 h-full">
              {!showResult ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <IconBox name="calculator" size="3xl" variant="purple" className="mb-6 opacity-50" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Configure seu perfil ao lado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs">
                    Marque as atividades que você faria e clique em "Calcular Meu Potencial"
                    para ver sua estimativa personalizada.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                    <p>💡 Dica: O perfil <strong>Gamer</strong> costuma dar 12.000+ pts/mês</p>
                    <p>💡 Dica: Apenas buscas + quiz já dão ~6.000 pts/mês</p>
                  </div>
                </div>
              ) : (
                <ResultDisplay result={result} />
              )}
            </Card>
          </div>
        </Grid>
      </div>
    </section>
  );
}

interface ToggleRowProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  icon: IconName;
  points: number;
  description: string;
}

function ToggleRow({ checked, onChange, label, icon, points, description }: ToggleRowProps) {
  return (
    <label className="flex items-center gap-4 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
        aria-label={label}
      />
      <IconBox name={icon} size="md" variant={checked ? 'primary' : 'default'} className="flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 dark:text-white text-sm">{label}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="text-right">
        <p className={cn('font-bold text-sm', checked ? 'text-amber-600 dark:text-amber-400' : 'text-gray-400 dark:text-gray-600')}>
          {checked ? `+${formatNumber(points)}/dia` : '—'}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {checked ? `~${formatNumber(points * 30)}/mês` : ''}
        </p>
      </div>
    </label>
  );
}

interface ResultDisplayProps {
  result: CalculatorResult;
}

function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Main Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Por Dia"
          value={formatNumber(result.dailyPoints)}
          suffix="pts"
          icon={"sun" as IconName}
          color="amber"
        />
        <StatCard
          label="Por Mês"
          value={formatNumber(result.monthlyPoints)}
          suffix="pts"
          icon={"calendar" as IconName}
          color="blue"
        />
        <StatCard
          label="Por Ano"
          value={formatNumber(result.yearlyPoints)}
          suffix="pts"
          icon={"trending-up" as IconName}
          color="purple"
        />
      </div>

      {/* Breakdown */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Icon name="bar-chart-2" size="md" className="text-purple-600 dark:text-purple-400" />
          Detalhamento por Atividade
        </h4>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
          {result.breakdown
            .filter((item) => item.enabled)
            .sort((a, b) => b.monthlyPoints - a.monthlyPoints)
            .map((item, index) => (
              <ActivityBar key={index} item={item} maxPoints={result.monthlyPoints} />
            ))}
        </div>
      </div>

      {/* Achievable Rewards */}
      <div className="mt-auto">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Icon name="gift" size="md" className="text-amber-600 dark:text-amber-400" />
          O que você pode resgatar por mês
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {result.achievableRewards.slice(0, 4).map((reward) => (
            <RewardEstimateCard key={reward.name} reward={reward} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  suffix: string;
  icon: IconName;
  color: 'amber' | 'blue' | 'purple' | 'green';
}

const statColors = {
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
};

function StatCard({ label, value, suffix, icon, color }: StatCardProps) {
  return (
    <div className={cn('rounded-xl p-4 text-center border', statColors[color])}>
      <IconBox name={icon} size="lg" variant={color} className="mx-auto mb-2" />
      <p className="text-2xl md:text-3xl font-bold">{value}</p>
      <p className="text-xs font-medium opacity-80">{label}</p>
      <p className="text-xs opacity-60">{suffix}</p>
    </div>
  );
}

interface ActivityBarProps {
  item: ActivityBreakdown;
  maxPoints: number;
}

function ActivityBar({ item, maxPoints }: ActivityBarProps) {
  const percentage = maxPoints > 0 ? (item.monthlyPoints / maxPoints) * 100 : 0;

  return (
    <div className="flex items-center gap-3">
      <div className="w-24 flex-shrink-0 text-sm font-medium text-gray-700 dark:text-gray-300">
        {item.name}
      </div>
      <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={item.monthlyPoints}
          aria-valuemin={0}
          aria-valuemax={maxPoints}
          aria-label={`${item.name}: ${formatNumber(item.monthlyPoints)} pontos por mês`}
        />
      </div>
      <div className="w-24 text-right text-sm font-bold text-amber-600 dark:text-amber-400 flex-shrink-0">
        {formatNumber(item.monthlyPoints)}
      </div>
    </div>
  );
}

interface RewardEstimateCardProps {
  reward: AchievableReward;
}

function RewardEstimateCard({ reward }: RewardEstimateCardProps) {
  const canAfford = reward.monthsToRedeem <= 1;

  return (
    <div className={cn(
      'p-4 rounded-xl border text-center transition-colors',
      canAfford
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
    )}>
      <p className="text-3xl mb-2">{reward.emoji}</p>
      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{reward.name}</p>
      <p className={cn('text-sm font-bold', canAfford ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400')}>
        {reward.monthsToRedeem <= 1
          ? '✓ Disponível este mês!'
          : `${reward.monthsToRedeem} mês${reward.monthsToRedeem > 1 ? 'es' : ''}`}
      </p>
    </div>
  );
}