/**
 * Icon components using Lucide React
 * Centralized icon exports for consistent usage
 */

'use client';

import { cn } from '@/lib/utils';

import {
  Gamepad2 as GamepadIcon,
  Music as MusicIcon,
  ShoppingBag as ShoppingBagIcon,
  Tv as TvIcon,
  Monitor as WindowsIcon,
  Phone as PhoneIcon,
  Gift as GiftIcon,
  Globe as GlobeIcon,
  LayoutDashboard as LayoutDashboardIcon,
  Search as SearchIcon,
  Smartphone as SmartphoneIcon,
  Newspaper as NewspaperIcon,
  ShoppingCart as ShoppingCartIcon,
  Lightbulb as LightbulbIcon,
  Trophy as TrophyIcon,
  Target as TargetIcon,
  Cloud as CloudIcon,
  CreditCard as CreditCardIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  HelpCircle as HelpCircleIcon,
  ClipboardList as ClipboardListIcon,
  Tag as TagIcon,
  Flame as FlameIcon,
  CheckSquare as CheckSquareIcon,
  Clock as ClockIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  ExternalLink as ExternalLinkIcon,
  Star as StarIcon,
  StarHalf as StarHalfIcon,
  Users as UsersIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  MapPin as MapPinIcon,
  // Social/Brand icons - use generic alternatives
  Send as TwitterIcon,
  GitBranch as GithubIcon,
  Link2 as LinkedinIcon,
  PlayCircle as YoutubeIcon,
  MessageCircle as DiscordIcon,
  Check as CheckIcon,
  X as XIcon,
  Menu as MenuIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Sparkles as SparklesIcon,
  Zap as ZapIcon,
  Coins as CoinIcon,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  BarChart2 as BarChart2Icon,
  Calculator as CalculatorIcon,
  RefreshCw as RefreshCwIcon,
  Info as InfoIcon,
  AlertTriangle as AlertTriangleIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  MessageSquare as MessageSquareIcon,
  Mail as MailIcon,
  Link as LinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  LogIn as LogInIcon,
  LogOut as LogOutIcon,
  // Browser icons
  Monitor as ChromeIcon,
  Globe as EdgeIcon,
  Gamepad as XboxIcon,
} from 'lucide-react';

import { type IconName } from '@/lib/types';

/**
 * Icon size mappings
 */
export const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
  '3xl': 'w-12 h-12',
  '4xl': 'w-16 h-16',
} as const;

export type IconSize = keyof typeof iconSizes;

/**
 * Icon component wrapper with consistent sizing and styling
 */
export interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
}

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  gamepad: GamepadIcon,
  music: MusicIcon,
  'shopping-bag': ShoppingBagIcon,
  tv: TvIcon,
  'gamepad-2': GamepadIcon,
  windows: WindowsIcon,
  phone: PhoneIcon,
  gift: GiftIcon,
  globe: GlobeIcon,
  'layout-dashboard': LayoutDashboardIcon,
  search: SearchIcon,
  smartphone: SmartphoneIcon,
  newspaper: NewspaperIcon,
  'shopping-cart': ShoppingCartIcon,
  lightbulb: LightbulbIcon,
  trophy: TrophyIcon,
  target: TargetIcon,
  cloud: CloudIcon,
  'credit-card': CreditCardIcon,
  calendar: CalendarIcon,
  bell: BellIcon,
  'help-circle': HelpCircleIcon,
  'clipboard-list': ClipboardListIcon,
  tag: TagIcon,
  flame: FlameIcon,
  'check-square': CheckSquareIcon,
  clock: ClockIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-left': ChevronRightIcon, // Using ChevronRightIcon for both (will be rotated via CSS if needed)
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'external-link': ExternalLinkIcon,
  star: StarIcon,
  'star-half': StarHalfIcon,
  users: UsersIcon,
  shield: ShieldIcon,
  lock: LockIcon,
  'map-pin': MapPinIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  discord: DiscordIcon,
  check: CheckIcon,
  x: XIcon,
  menu: MenuIcon,
  sun: SunIcon,
  moon: MoonIcon,
  'arrow-up-right': ArrowUpRightIcon,
  sparkles: SparklesIcon,
  zap: ZapIcon,
  coin: CoinIcon,
  award: AwardIcon,
  'trending-up': TrendingUpIcon,
  'bar-chart-2': BarChart2Icon,
  calculator: CalculatorIcon,
  'refresh-cw': RefreshCwIcon,
  info: InfoIcon,
  'alert-triangle': AlertTriangleIcon,
  heart: HeartIcon,
  'thumbs-up': ThumbsUpIcon,
  'message-square': MessageSquareIcon,
  mail: MailIcon,
  link: LinkIcon,
  download: DownloadIcon,
  upload: UploadIcon,
  settings: SettingsIcon,
  user: UserIcon,
  'log-in': LogInIcon,
  'log-out': LogOutIcon,
  chrome: ChromeIcon,
  edge: EdgeIcon,
  xbox: XboxIcon,
};

export function Icon({
  name,
  size = 'md',
  className = '',
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const IconComponent = iconMap[name] || HelpCircleIcon;

  return (
    <IconComponent
      className={iconSizes[size] + ' ' + className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      {...props}
    />
  );
}

/**
 * Pre-styled icon containers for common use cases
 */
export interface IconBoxProps {
  name: IconName;
  size?: IconSize;
  variant?: 'default' | 'primary' | 'gold' | 'green' | 'purple' | 'blue' | 'red' | 'amber';
  className?: string;
  children?: React.ReactNode;
}

const iconBoxVariants = {
  default: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  primary: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  gold: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
};

const iconBoxSizes = {
  xs: 'p-2',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
  xl: 'p-6',
};

export function IconBox({
  name,
  size = 'md',
  variant = 'default',
  className = '',
  children,
}: IconBoxProps) {
  const boxSizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
    '3xl': 'w-24 h-24',
    '4xl': 'w-32 h-32',
  };

  const iconSizeClasses = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl',
  } as const;

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
      {children || <Icon name={name} size={iconSizeClasses[size]} />}
    </div>
  );
}

/**
 * Star rating display
 */
export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: IconSize;
  showValue?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 'sm',
  showValue = false,
  className = '',
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} de ${maxRating} estrelas`}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="star" size={size} className="text-amber-400 fill-current" aria-hidden={true} />
      ))}
      {hasHalfStar && (
        <Icon key="half" name="star-half" size={size} className="text-amber-400 fill-current" aria-hidden={true} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} name="star" size={size} className="text-gray-300 dark:text-gray-600" aria-hidden={true} />
      ))}
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

/**
 * Animated icon wrapper for pulse, spin, bounce effects
 */
export interface AnimatedIconProps extends IconProps {
  animation?: 'pulse' | 'spin' | 'bounce' | 'ping';
}

export function AnimatedIcon({
  name,
  size = 'md',
  animation,
  className = '',
  ...props
}: AnimatedIconProps) {
  const animationClasses = {
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    bounce: 'animate-bounce',
    ping: 'animate-ping',
  };

  return (
    <Icon
      name={name}
      size={size}
      className={cn(animation && animationClasses[animation], className)}
      {...props}
    />
  );
}