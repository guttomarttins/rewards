/**
 * Type definitions for the Microsoft Rewards landing page
 */

/**
 * Reward item for redemption
 */
export interface Reward {
  id: string;
  name: string;
  icon: IconName;
  category: string;
  pointsCost: number;
  description: string;
  popular?: boolean;
  new?: boolean;
  custom?: boolean;
  estimatedValue: number; // BRL
  color?: 'primary' | 'gold' | 'green' | 'purple' | 'blue' | 'red';
}

/**
 * Earning method (pillar)
 */
export interface EarningMethod {
  id: string;
  title: string;
  icon: IconName;
  color: 'blue' | 'green' | 'purple' | 'gold' | 'red';
  description: string;
  dailyPotential: string;
  monthlyPotential: string;
  activities: Activity[];
  tip: string;
  tipIcon: IconName;
}

/**
 * Individual activity within an earning method
 */
export interface Activity {
  name: string;
  points: string;
  icon: IconName;
}

/**
 * Testimonial
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  reward: string;
  timeAgo: string;
}

/**
 * FAQ Item
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Calculator profile
 */
export interface CalculatorProfile {
  dailySearches: boolean;
  xboxPlayer: boolean;
  edgeUser: boolean;
  mobileSearches: boolean;
  dailyQuizzes: boolean;
  weeklyQuests: boolean;
  streakBonus: boolean;
}

/**
 * Calculator result
 */
export interface CalculatorResult {
  dailyPoints: number;
  monthlyPoints: number;
  yearlyPoints: number;
  breakdown: ActivityBreakdown[];
  achievableRewards: AchievableReward[];
}

export interface ActivityBreakdown {
  name: string;
  dailyPoints: number;
  monthlyPoints: number;
  enabled: boolean;
}

export interface AchievableReward {
  name: string;
  pointsCost: number;
  monthsToRedeem: number;
  emoji: string;
}

/**
 * Analytics event types
 */
export interface AnalyticsEvent {
  event_name: string;
  parameters?: Record<string, string | number | boolean>;
}

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Card variants
 */
export type CardVariant = 'default' | 'reward' | 'method' | 'testimonial' | 'feature';

/**
 * Badge variants
 */
export type BadgeVariant = 'default' | 'gold' | 'new' | 'popular' | 'bonus';

/**
 * Section props
 */
export interface SectionProps {
  id?: string;
  className?: string;
  'aria-label'?: string;
}

/**
 * Navigation link
 */
export interface NavLink {
  label: string;
  href: string;
  variant: ButtonVariant;
  external?: boolean;
}

/**
 * CTA Button props
 */
export interface CTAButtonProps {
  label: string;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

/**
 * Animation variants for Framer Motion
 */
export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
  exit?: Record<string, unknown>;
}

/**
 * Intersection Observer options
 */
export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Icon names (Lucide React)
 */
export type IconName =
  | 'gamepad'
  | 'music'
  | 'shopping-bag'
  | 'tv'
  | 'gamepad-2'
  | 'windows'
  | 'phone'
  | 'gift'
  | 'globe'
  | 'gamepad'
  | 'layout-dashboard'
  | 'search'
  | 'smartphone'
  | 'newspaper'
  | 'shopping-cart'
  | 'lightbulb'
  | 'trophy'
  | 'target'
  | 'cloud'
  | 'credit-card'
  | 'calendar'
  | 'bell'
  | 'help-circle'
  | 'clipboard-list'
  | 'tag'
  | 'flame'
  | 'check-square'
  | 'clock'
  | 'check'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'arrow-right'
  | 'arrow-left'
  | 'external-link'
  | 'star'
  | 'star-half'
  | 'user'
  | 'users'
  | 'shield'
  | 'lock'
  | 'clock'
  | 'calendar'
  | 'globe'
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'twitter'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'discord'
  | 'calculator'
  | 'bar-chart-2'
  | 'sun'
  | 'sparkles'
  | 'zap'
  | 'x'
  | 'menu'
  | 'info'
  | 'coin'
  | 'chevron-left'
  | 'chevron-right'
  | 'award'
  | 'moon'
  | 'arrow-up-right'
  | 'trending-up'
  | 'bar-chart-2'
  | 'calculator'
  | 'refresh-cw'
  | 'info'
  | 'alert-triangle'
  | 'heart'
  | 'thumbs-up'
  | 'message-square'
  | 'mail'
  | 'link'
  | 'download'
  | 'upload'
  | 'settings'
  | 'user'
  | 'log-in'
  | 'log-out'
  | 'chrome'
  | 'edge'
  | 'xbox';

/**
 * Color palette keys
 */
export type ColorKey =
  | 'ms-blue'
  | 'ms-blue-hover'
  | 'ms-blue-light'
  | 'rewards-gold'
  | 'rewards-gold-hover'
  | 'rewards-gold-light'
  | 'rewards-green'
  | 'rewards-green-hover'
  | 'rewards-green-light'
  | 'rewards-purple'
  | 'rewards-purple-hover'
  | 'rewards-purple-light'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

/**
 * Breakpoint keys
 */
export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Spacing keys
 */
export type SpacingKey =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '8'
  | '10'
  | '12'
  | '16'
  | '20'
  | '24';

/**
 * Font size keys
 */
export type FontSizeKey =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

/**
 * Font weight keys
 */
export type FontWeightKey = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

/**
 * Shadow keys
 */
export type ShadowKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'focus';

/**
 * Radius keys
 */
export type RadiusKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

/**
 * Transition keys
 */
export type TransitionKey = 'fast' | 'normal' | 'slow';

/**
 * Z-index keys
 */
export type ZIndexKey =
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'modal-backdrop'
  | 'modal'
  | 'popover'
  | 'tooltip'
  | 'toast';