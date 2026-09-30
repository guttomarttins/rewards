/**
 * Constants and static data for the Microsoft Rewards landing page
 * All content is in Portuguese (Brazil)
 */

import type { Reward, EarningMethod, Testimonial, FAQItem, CalculatorProfile } from '@/lib/types';

/**
 * Referral link with welcome bonus
 */
export const REFERRAL_URL = 'https://rewards.bing.com/welcome?rh=bYHgIzH2RTY&ref=rafsrchae';

/**
 * Welcome bonus points
 */
export const WELCOME_BONUS_POINTS = 1320;

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { label: 'Entrar', href: 'https://login.live.com', variant: 'secondary' as const },
  { label: 'Cadastrar', href: REFERRAL_URL, variant: 'primary' as const, external: true },
];

/**
 * Hero section content
 */
export const HERO_CONTENT = {
  badge: '✨ BÔNUS EXCLUSIVO DE BOAS-VINDAS',
  headline: 'Ganhe Recompensas Reais Fazendo o que Já Faz',
  subheadline:
    'Transforme suas buscas, jogos e compras diárias em Gift Cards, Xbox Game Pass, Spotify Premium e muito mais.',
  ctaPrimary: {
    label: '🚀 QUERO MEUS 1.320 PONTOS AGORA',
    href: REFERRAL_URL,
  },
  ctaSecondary: {
    label: 'Ver Como Funciona',
    href: '#como-funciona',
    variant: 'secondary' as const,
  },
  trustIndicators: [
    { label: '4.8/5', description: 'Avaliação dos usuários' },
    { label: '2M+', description: 'Usuários ativos no Brasil' },
    { label: '100% Grátis', description: 'Sem cartão de crédito' },
  ],
  bonusHighlight: {
    points: WELCOME_BONUS_POINTS,
    description: 'Ao se cadastrar pelo link abaixo e concluir a missão de boas-vindas (leva 2 minutos)',
  },
};

/**
 * Rewards available for redemption
 */
export const REWARDS: Reward[] = [
  {
    id: 'xbox-game-pass-ultimate',
    name: 'Xbox Game Pass Ultimate',
    icon: 'gamepad',
    category: 'Jogos',
    pointsCost: 6800,
    description: 'Acesso a centenas de jogos + EA Play + Gold',
    popular: true,
    estimatedValue: 180, // BRL
  },
  {
    id: 'spotify-premium-2months',
    name: 'Spotify Premium - 2 Meses',
    icon: 'music',
    category: 'Música',
    pointsCost: 3400,
    description: 'Música sem anúncios, offline, qualidade alta',
    new: true,
    estimatedValue: 60,
  },
  {
    id: 'amazon-gift-card-50',
    name: 'Amazon Gift Card R$ 50',
    icon: 'shopping-bag',
    category: 'Compras',
    pointsCost: 5000,
    description: 'Compre o que quiser na Amazon Brasil',
    popular: false,
    estimatedValue: 50,
  },
  {
    id: 'netflix-gift-card',
    name: 'Netflix Gift Card',
    icon: 'tv',
    category: 'Streaming',
    pointsCost: 4500,
    description: 'Assista séries e filmes sem pagar',
    popular: false,
    estimatedValue: 45,
  },
  {
    id: 'xbox-game-pass-core',
    name: 'Xbox Game Pass Core (12 meses)',
    icon: 'gamepad-2',
    category: 'Jogos',
    pointsCost: 10000,
    description: 'Multijogador online + catálogo de jogos',
    popular: false,
    estimatedValue: 200,
  },
  {
    id: 'microsoft-store-credit',
    name: 'Crédito Microsoft Store R$ 100',
    icon: 'windows',
    category: 'Apps/Jogos',
    pointsCost: 9100,
    description: 'Jogos, apps, filmes na loja Microsoft',
    popular: false,
    estimatedValue: 100,
  },
  {
    id: 'skype-credit',
    name: 'Crédito Skype R$ 30',
    icon: 'phone',
    category: 'Comunicação',
    pointsCost: 3000,
    description: 'Ligue para telefones fixos e móveis',
    popular: false,
    estimatedValue: 30,
  },
  {
    id: 'custom-redeem',
    name: 'Resgate Personalizado',
    icon: 'gift',
    category: 'Variados',
    pointsCost: 0,
    description: 'PayPal, Gift Cards variados, doações',
    popular: false,
    estimatedValue: 0,
    custom: true,
  },
];

/**
 * Earning methods - the 3 pillars
 */
export const EARNING_METHODS: EarningMethod[] = [
  {
    id: 'edge',
    title: 'Microsoft Edge',
    icon: 'globe',
    color: 'blue',
    description: 'Navegue e busque com o Edge para ganhar pontos automaticamente',
    dailyPotential: '250-300 pts/dia',
    monthlyPotential: '7.500-9.000 pts/mês',
    activities: [
      { name: 'Buscas no PC (até 30/dia)', points: '150 pts/dia', icon: 'search' },
      { name: 'Buscas no Mobile (até 20/dia)', points: '100 pts/dia', icon: 'smartphone' },
      { name: 'Novidades & Quiz diários', points: '10-50 pts/dia', icon: 'newspaper' },
      { name: 'Compras na Microsoft Store', points: '1 pt por R$ 1', icon: 'shopping-cart' },
    ],
    tip: 'Defina o Edge como navegador padrão e use a barra de endereço para buscas',
    tipIcon: 'lightbulb',
  },
  {
    id: 'xbox',
    title: 'Xbox App / Console',
    icon: 'gamepad',
    color: 'green',
    description: 'Jogue e conquiste conquistas para ganhar pontos extras',
    dailyPotential: '50-1.000+ pts/dia',
    monthlyPotential: '1.500-30.000+ pts/mês',
    activities: [
      { name: 'Conquistas desbloqueadas', points: '50-1.000 pts', icon: 'trophy' },
      { name: 'Game Pass Quests (semanais)', points: '100-500 pts/semana', icon: 'target' },
      { name: 'Jogar na nuvem (xCloud)', points: '50 pts/sessão', icon: 'cloud' },
      { name: 'Compras na Loja Xbox', points: '1 pt por R$ 1', icon: 'credit-card' },
      { name: 'Streak de login diário', points: '10-50 pts/dia', icon: 'calendar' },
    ],
    tip: 'Ative notificações de missões no app Xbox Game Pass',
    tipIcon: 'bell',
  },
  {
    id: 'dashboard',
    title: 'Painel Rewards (Bing.com)',
    icon: 'layout-dashboard',
    color: 'purple',
    description: 'Complete tarefas rápidas no painel oficial diariamente',
    dailyPotential: '50-150 pts/dia',
    monthlyPotential: '1.500-4.500 pts/mês',
    activities: [
      { name: 'Quiz Diário (3 perguntas)', points: '30-50 pts', icon: 'help-circle' },
      { name: 'Pesquisas de opinião', points: '50-200 pts', icon: 'clipboard-list' },
      { name: 'Ofertas especiais', points: '10-500 pts', icon: 'tag' },
      { name: 'Streak bônus (7/30/60 dias)', points: '100-1.000 pts', icon: 'flame' },
      { name: 'Conjuntos de tarefas', points: '50-200 pts', icon: 'check-square' },
    ],
    tip: 'Visite o painel 2x ao dia (manhã/noite) para não perder nada',
    tipIcon: 'clock',
  },
];

/**
 * Combined earning potential
 */
export const COMBINED_POTENTIAL = {
  conservative: { daily: 300, monthly: 9000, yearly: 108000 },
  average: { daily: 400, monthly: 12000, yearly: 144000 },
};

/**
 * What you can get with monthly points (average profile)
 */
export const MONTHLY_REWARDS_EXAMPLES = [
  { name: '1 mês Xbox Game Pass Ultimate', points: 6800, emoji: '🎮' },
  { name: '2 meses Spotify Premium', points: 6800, emoji: '🎵' },
  { name: 'R$ 100 em Amazon Gift Cards', points: 10000, emoji: '🛒' },
  { name: '2 meses Netflix', points: 9000, emoji: '🎬' },
];

/**
 * Testimonials / Social proof
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcelo S.',
    location: 'São Paulo, SP',
    avatar: 'MS',
    rating: 5,
    text: '"Resgatei 6 meses de Game Pass Ultimate só jogando! O bônus de boas-vindas me deu 1.320 pontos na hora. Melhor programa de fidelidade que existe."',
    reward: 'Xbox Game Pass Ultimate',
    timeAgo: '2 meses atrás',
  },
  {
    id: '2',
    name: 'Ana Carolina',
    location: 'Rio de Janeiro, RJ',
    avatar: 'AC',
    rating: 5,
    text: '"O bônus de boas-vindas me deu 1.320 pts na hora. Fácil demais. Uso o Edge no celular e PC, faço os quizzes no ônibus. Já paguei 3 meses de Spotify."',
    reward: 'Spotify Premium',
    timeAgo: '1 mês atrás',
  },
  {
    id: '3',
    name: 'Pedro H.',
    location: 'Porto Alegre, RS',
    avatar: 'PH',
    rating: 5,
    text: '"Uso há 2 anos, já paguei Netflix, Spotify e Xbox só com pontos. Grátis! A dica é combinar Edge + Xbox + Dashboard todo dia. Vira rotina."',
    reward: 'Múltiplos resgates',
    timeAgo: '2 anos atrás',
  },
  {
    id: '4',
    name: 'Juliana M.',
    location: 'Belo Horizonte, MG',
    avatar: 'JM',
    rating: 5,
    text: '"Achava que era golpe, mas é real. Cadastrei pelo link, fiz a missão de boas-vindas em 2 min e ganhei os pontos. Já resgatei R$ 100 na Amazon."',
    reward: 'Amazon Gift Card',
    timeAgo: '3 semanas atrás',
  },
  {
    id: '5',
    name: 'Rafael K.',
    location: 'Curitiba, PR',
    avatar: 'RK',
    rating: 5,
    text: '"O segredo é o streak. 60 dias seguidos dá 1000 pts bônus. Com Edge + Xbox Game Pass quests, faço 15k+ pts/mês fácil. Pago meu Game Pass o ano todo."',
    reward: 'Xbox Game Pass Core',
    timeAgo: '6 meses atrás',
  },
];

/**
 * FAQ Items
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'free',
    question: 'É realmente grátis? Tem pegadinha?',
    answer:
      'Sim, 100% grátis! Não paga nada para participar, não precisa de cartão de crédito, não há taxas escondidas. A Microsoft ganha com publicidade nas buscas e compartilha uma parte com você em forma de pontos.',
  },
  {
    id: 'credit-card',
    question: 'Precisa cadastrar cartão de crédito?',
    answer:
      'Não. Zero dados bancários necessários. Você só precisa de uma conta Microsoft (Outlook/Hotmail/Live) gratuita. O cadastro leva 30 segundos.',
  },
  {
    id: 'brazil',
    question: 'Funciona no Brasil? Está em português?',
    answer:
      'Sim! O Microsoft Rewards funciona 100% no Brasil, totalmente em português. Todas as recompensas listadas (Xbox, Spotify, Amazon, Netflix) estão disponíveis para resgate no Brasil.',
  },
  {
    id: 'time',
    question: 'Quanto tempo demora para ganhar os 1.320 pontos?',
    answer:
      'A missão de boas-vindas leva cerca de 2 minutos: basta clicar no link, fazer login/criar conta, e completar 3-4 tarefas simples (busca no Bing, visitar o painel, etc.). Os pontos caem na hora.',
  },
  {
    id: 'expiry',
    question: 'Os pontos expiram?',
    answer:
      'Os pontos só expiram se você ficar 18 meses sem nenhuma atividade (sem ganhar nem resgatar pontos). Basta fazer uma busca por mês para manter a conta ativa.',
  },
  {
    id: 'mobile',
    question: 'Posso usar no celular? Tem app?',
    answer:
      'Sim! Use o app "Microsoft Rewards" (Android/iOS) ou o navegador Microsoft Edge no celular. As buscas no mobile dão 100 pts/dia extras. O app Xbox também funciona para missões.',
  },
  {
    id: 'family',
    question: 'Posso usar na conta da família?',
    answer:
      'Cada pessoa deve ter sua própria conta Microsoft Rewards. Não é permitido compartilhar contas. Mas cada membro da família pode ter sua conta e ganhar pontos independentemente.',
  },
  {
    id: 'vpn',
    question: 'Precisa de VPN ou mudar região?',
    answer:
      'Não! Funciona direto do Brasil. Não use VPN - isso pode banir sua conta. O programa é oficial e localizado para o Brasil.',
  },
];

/**
 * Calculator default profile
 */
export const DEFAULT_CALCULATOR_PROFILE: CalculatorProfile = {
  dailySearches: true,
  xboxPlayer: false,
  edgeUser: true,
  mobileSearches: true,
  dailyQuizzes: true,
  weeklyQuests: false,
  streakBonus: false,
};

/**
 * Calculator presets
 */
export const CALCULATOR_PRESETS: Record<string, CalculatorProfile> = {
  casual: {
    dailySearches: true,
    xboxPlayer: false,
    edgeUser: true,
    mobileSearches: true,
    dailyQuizzes: true,
    weeklyQuests: false,
    streakBonus: false,
  },
  gamer: {
    dailySearches: true,
    xboxPlayer: true,
    edgeUser: true,
    mobileSearches: true,
    dailyQuizzes: true,
    weeklyQuests: true,
    streakBonus: true,
  },
};

/**
 * Calculator points per activity (daily)
 */
export const POINTS_PER_ACTIVITY = {
  dailySearchesPC: 150,
  dailySearchesMobile: 100,
  dailyQuiz: 40,
  weeklyQuest: 50, // averaged daily
  streakBonus7: 10, // averaged daily
  streakBonus30: 15, // averaged daily
  streakBonus60: 25, // averaged daily
  xboxAchievements: 100, // conservative average
  xboxGamePassQuests: 30, // averaged daily
  xboxCloudGaming: 10, // averaged daily
  edgeShopping: 20, // averaged daily
};

/**
 * Footer links
 */
export const FOOTER_LINKS = {
  product: [
    { label: 'Microsoft Rewards', href: 'https://rewards.bing.com' },
    { label: 'Xbox Game Pass', href: 'https://xbox.com/gamepass' },
    { label: 'Microsoft Edge', href: 'https://microsoft.com/edge' },
  ],
  legal: [
    { label: 'Termos de Uso', href: 'https://www.microsoft.com/pt-br/servicesagreement' },
    { label: 'Privacidade', href: 'https://privacy.microsoft.com/pt-br' },
    { label: 'Cookies', href: 'https://www.microsoft.com/pt-br/privacy/cookies' },
  ],
  support: [
    { label: 'Suporte Rewards', href: 'https://support.microsoft.com/pt-br/rewards' },
    { label: 'Perguntas Frequentes', href: 'https://rewards.bing.com/faq' },
    { label: 'Contato', href: 'https://support.microsoft.com/pt-br/contactus' },
  ],
};

/**
 * SEO metadata
 */
export const SEO_METADATA = {
  title: 'Microsoft Rewards Brasil: Ganhe 1.320 Pontos de Boas-Vindas + Xbox, Spotify, Gift Cards',
  description:
    'Cadastre-se grátis no Microsoft Rewards e ganhe 1.320 pontos imediatos ao concluir a missão de boas-vindas. Resgate Xbox Game Pass, Spotify Premium 2 meses grátis, Amazon Gift Cards. Veja como ganhar pontos rápido combinando Edge, Xbox e Dashboard.',
  keywords: [
    'Microsoft Rewards',
    'Microsoft Rewards Brasil',
    'ganhar pontos Microsoft',
    'Xbox Game Pass grátis',
    'Spotify Premium grátis',
    'Gift Card grátis',
    'Bing Rewards',
    'como ganhar pontos Microsoft Rewards',
    'missão de boas-vindas Microsoft Rewards',
    '1320 pontos Microsoft Rewards',
  ],
  openGraph: {
    title: 'Microsoft Rewards Brasil: 1.320 Pontos de Boas-Vindas Grátis',
    description:
      'Ganhe recompensas reais (Xbox, Spotify, Amazon) fazendo buscas e jogando. 1.320 pontos imediatos no cadastro.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Microsoft Rewards Brasil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Rewards Brasil: 1.320 Pontos Grátis',
    description: 'Cadastre-se e ganhe Xbox Game Pass, Spotify Premium, Gift Cards grátis.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * JSON-LD Structured Data
 */
export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Microsoft Rewards Brasil',
  url: 'https://rewards.bing.com',
  description: SEO_METADATA.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://rewards.bing.com/dashboard',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Microsoft',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.microsoft.com/favicon.ico',
    },
  },
};

export const FAQ_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};