# Plano Completo - Landing Page Microsoft Rewards

## 🎯 Objetivo Principal
**Converter visitantes em usuários do Microsoft Rewards** através do link de indicação:
`https://rewards.bing.com/welcome?rh=bYHgIzH2RTY&ref=rafsrchae`

**Meta de Conversão:** Clique no link de indicação → Cadastro → Conclusão da missão de boas-vindas (1.320 pontos)

---

## 🎨 Design System - Inspirado em rewards.bing.com/dashboard

### Paleta de Cores (Microsoft Fluent Design)
```css
:root {
  /* Cores Primárias Microsoft */
  --ms-blue: #0067B8;
  --ms-blue-hover: #005A9E;
  --ms-blue-light: #E8F3FD;
  --ms-dark-blue: #004578;
  
  /* Cores de Destaque/Recompensas */
  --rewards-gold: #FFB900;
  --rewards-gold-light: #FFF3D6;
  --rewards-green: #107C10;
  --rewards-purple: #6B3FA0;
  
  /* Neutros */
  --white: #FFFFFF;
  --gray-50: #F3F2F1;
  --gray-100: #EDEBE9;
  --gray-200: #E1DFDD;
  --gray-300: #C8C6C4;
  --gray-400: #A19F9D;
  --gray-500: #8A8886;
  --gray-600: #605E5C;
  --gray-700: #484644;
  --gray-800: #323130;
  --gray-900: #201F1E;
  --black: #1B1A19;
  
  /* Semânticas */
  --success: #107C10;
  --success-bg: #DFF6DD;
  --warning: #FFB900;
  --error: #D13438;
  --info: #0078D4;
}
```

### Tipografia (Fluent UI / Segoe UI)
```css
font-family: 'Segoe UI', 'Segoe UI Web', -apple-system, BlinkMacSystemFont, 
             'Helvetica Neue', Arial, sans-serif;

--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 2rem;      /* 32px */
--font-size-4xl: 2.5rem;    /* 40px */
--font-size-5xl: 3rem;      /* 48px */

--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Espaçamento (Grid 4px)
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Border Radius & Sombras
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.07);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15);
--shadow-inner: inset 0 2px 4px rgba(0,0,0,0.06);
```

---

## 📐 Estrutura da Landing Page

### 1. Header / Navigation (Fixo no topo)
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo MS Rewards]                    [Entrar] [Cadastrar]   │
└─────────────────────────────────────────────────────────────┘
```
- Logo Microsoft Rewards (ícone + texto)
- Botão CTA secundário "Entrar" (outline)
- Botão CTA primário "Começar Grátis" (filled blue)

### 2. Hero Section (Above the Fold)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   🎁 Ganhe Recompensas Reais Fazendo o que Já Faz           │
│                                                             │
│   Transforme suas buscas, jogos e compras diárias em       │
│   Gift Cards, Xbox Game Pass, Spotify Premium e muito mais.│
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  ✨ BÔNUS EXCLUSIVO: 1.320 PONTOS IMEDIATOS         │  │
│   │  Ao se cadastrar pelo link abaixo e concluir a      │  │
│   │  missão de boas-vindas (leva 2 minutos)             │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   [🚀 QUERO MEUS 1.320 PONTOS AGORA]  [Ver Como Funciona]  │
│                                                             │
│   ⭐ 4.8/5 • 2M+ usuários ativos • 100% Grátis             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elementos-chave do Hero:**
- Headline com benefício claro (não feature)
- Subheadline explicando o "como"
- **Badge de urgência/benefício** (1.320 pontos) - destaque dourado
- CTA principal proeminente (azul Microsoft, grande, com ícone seta)
- CTA secundário (ghost) para quem quer saber mais
- Social proof (rating, usuários, grátis)
- Background sutil com padrão geométrico Microsoft

### 3. Seção "O Que Você Ganha" (Value Props)
```
┌─────────────────────────────────────────────────────────────┐
│                    RECOMPENSAS REAIS                        │
│            Escolha como resgatar seus pontos                │
├──────────┬──────────┬──────────┬──────────┬────────────────┤
│  🎮      │  🎵      │  🛒      │  🎬      │  💳            │
│  Xbox    │  Spotify │  Amazon  │  Netflix │  Resgate       │
│  Game    │  Premium │  Gift    │  Gift    │  Personalizado │
│  Pass    │  2 MESES │  Card    │  Card    │  (PayPal, etc) │
│          │  GRÁTIS  │          │          │                │
│  6.800   │  3.400   │  5.000   │  4.500   │  Variados      │
│  pts     │  pts     │  pts     │  pts     │  pts           │
└──────────┴──────────┴──────────┴──────────┴────────────────┘
```
- Cards estilo dashboard do Rewards
- Ícones grandes, valores de pontos reais
- Hover effect: elevação + brilho dourado
- Tag "NOVO" ou "POPULAR" nos mais atrativos

### 4. Seção "Como Ganhar Pontos Rápido" (O Segredo)
```
┌─────────────────────────────────────────────────────────────┐
│              MAXIMIZE SEUS GANHOS DIÁRIOS                   │
│        Combine 3 fontes e ganhe 300-500 pts/dia             │
├──────────────────────┬──────────────────────┬───────────────┤
│   🌐 Microsoft Edge  │   🎮 Xbox App        │   📱 Dashboard │
│   ┌────────────────┐ │   ┌────────────────┐ │  ┌───────────┐│
│   │ • Buscas PC:   │ │   │ • Conquistas:  │ │  │ • Quiz    ││
│   │   150 pts/dia  │ │   │   50-1000 pts  │ │  │   Diário  ││
│   │ • Buscas Móvel │ │   │ • Game Pass:   │ │  │ • Pesquisas││
│   │   100 pts/dia  │ │   │   quests       │ │  │ • Ofertas ││
│   │ • Novidades:   │ │   │ • Jogar nuvem  │ │  │ • Streak  ││
│   │   10-50 pts    │ │   │ • Compras loja │ │  │   bônus   ││
│   └────────────────┘ │   └────────────────┘ │  └───────────┘│
│   💡 Dica: Defina   │   💡 Dica: Ative     │  💡 Dica:     │
│   Edge como padrão  │   notificações       │  Visite 2x/dia│
└──────────────────────┴──────────────────────┴───────────────┘
```

### 5. Calculadora de Ganhos (Interativa)
```
┌─────────────────────────────────────────────────────────────┐
│            QUANTO VOCÊ PODE GANHAR POR MÊS?                 │
│                                                             │
│   Perfil: [☑ Buscas diárias] [☑ Jogo no Xbox] [☑ Edge]    │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │           📊 ESTIMADO: 12.000 - 18.000 pts/mês      │  │
│   │                                                     │  │
│   │   Isso equivale a:                                  │  │
│   │   🎮 1-2 meses de Xbox Game Pass Ultimate          │  │
│   │   🎵 3-4 meses de Spotify Premium                   │  │
│   │   🛒 R$ 100-150 em Gift Cards Amazon               │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   [Calcular Meu Potencial]                                  │
└─────────────────────────────────────────────────────────────┘
```

### 6. Prova Social / Depoimentos
```
┌─────────────────────────────────────────────────────────────┐
│              O QUE DIZEM OS USUÁRIOS                        │
├─────────────────┬─────────────────┬─────────────────────────┤
│ "Resgatei 6    │ "O bônus de     │ "Uso há 2 anos,         │
│ meses de Game  │ boas-vindas me  │ já paguei Netflix,       │
│ Pass Ultimate  │ deu 1320 pts    │ Spotify e Xbox só       │
│ só jogando!"   │ na hora. Fácil  │ com pontos. Grátis!"    │
│  - Marcelo, SP│  - Ana, RJ      │  - Pedro, RS            │
│  ⭐⭐⭐⭐⭐       │  ⭐⭐⭐⭐⭐        │  ⭐⭐⭐⭐⭐              │
└─────────────────┴─────────────────┴─────────────────────────┘
```

### 7. FAQ Objeções (Accordion)
```
┌─────────────────────────────────────────────────────────────┐
│                    DÚVIDAS FREQUENTES                       │
├─────────────────────────────────────────────────────────────┤
│ ▼ É realmente grátis? Sim! Não paga nada para participar.  │
│ ▼ Precisa de cartão de crédito? Não. Zero dados bancários. │
│ ▼ Funciona no Brasil? Sim, 100% localizado em PT-BR.       │
│ ▼ Quanto tempo demora? Missão boas-vindas: 2 minutos.      │
│ ▼ Os pontos expiram? Só se ficar 18 meses inativo.         │
│ ▼ Posso usar no celular? Sim, app Microsoft Rewards + Edge.│
└─────────────────────────────────────────────────────────────┘
```

### 8. CTA Final (Bottom of Page)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   🎯 PRONTO PARA COMEÇAR A GANHAR?                          │
│                                                             │
│   Clique no botão abaixo, faça seu cadastro rápido         │
│   e garanta seus 1.320 pontos de boas-vindas HOJE.         │
│                                                             │
│   [🚀 SIM, QUERO MEUS 1.320 PONTOS AGORA]                  │
│                                                             │
│   ⟶ Leva 30 segundos ⟶ Sem cartão ⟶ Começa na hora        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 9. Footer
```
┌─────────────────────────────────────────────────────────────┐
│  Microsoft Rewards  │  Termos  │  Privacidade  │  Suporte   │
│                                                             │
│  © 2025 Microsoft. Não afiliado oficialmente.              │
│  Site independente para divulgação do programa.            │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚡ Otimizações de Conversão (CRO)

### Psicologia Aplicada
1. **Escassez/Urgência**: "1.320 pontos IMEDIATOS" + badge dourado
2. **Prova Social**: 2M+ usuários, depoimentos reais, rating 4.8
3. **Autoridade**: Design Microsoft oficial, logos parceiros (Xbox, Spotify)
4. **Reciprocidade**: "Ganhe por fazer o que já faz"
5. **Facilidade**: "2 minutos", "Sem cartão", "100% Grátis"
6. **Visualização**: Calculadora mostra valor real em $$$

### Micro-interactions
- Botão CTA: pulse animation a cada 3s
- Cards recompensas: hover → scale(1.02) + gold glow
- Contador animado nos números (1.320, 12.000, etc.)
- Scroll reveal animations (IntersectionObserver)
- Progress bar no topo: "Você está a 1 clique de 1.320 pontos"

### A/B Testing Ready
- Hero: Headline focada em "Dinheiro/Gift Cards" vs "Xbox/Game Pass"
- CTA: "Quero meus pontos" vs "Começar grátis" vs "Resgatar recompensas"
- Badge: "1.320 pontos" vs "R$ 50 em recompensas" vs "2 meses Spotify"

---

## 🛠 Stack Técnica Recomendada

### Opção 1: Next.js 14 + Tailwind (Recomendado)
```json
{
  "framework": "Next.js 14 (App Router)",
  "styling": "Tailwind CSS + @tailwindcss/forms",
  "animations": "Framer Motion",
  "icons": "Lucide React + @fluentui/react-icons",
  "analytics": "Vercel Analytics + GA4 + Microsoft Clarity",
  "deploy": "Vercel (Edge Network)",
  "performance": "ISR + Image Optimization + Font Optimization"
}
```

### Opção 2: Astro + Tailwind (Mais leve)
```json
{
  "framework": "Astro 4",
  "styling": "Tailwind CSS",
  "interactivity": "Vanilla JS / Alpine.js",
  "deploy": "Cloudflare Pages / Netlify"
}
```

### Estrutura de Pastas
```
/src
  /app                    # Next.js App Router
    /page.tsx             # Landing page principal
    /layout.tsx           # Layout raiz
    /globals.css          # Design tokens + reset
  /components
    /ui                   # Componentes base (Button, Card, Badge)
    /sections             # Hero, ValueProps, HowItWorks, Calculator, FAQ, CTA
    /icons                # Ícones customizados
  /lib
    /utils.ts             # Helpers (cn, formatters)
    /constants.ts         # Dados estáticos (rewards, depoimentos)
    /analytics.ts         # Event tracking
  /hooks
    /useScrollReveal.ts   # Intersection Observer hook
    /useCounter.ts        # Animação de números
  /styles
    /tokens.css           # CSS Custom Properties (design system)
```

---

## 📊 Métricas & Tracking

### Eventos GA4 / Clarity
```typescript
// Eventos principais
'landing_page_view'
'hero_cta_click'           // Botão principal hero
'hero_secondary_click'     // "Ver como funciona"
'reward_card_hover'        // Hover nos cards de recompensa
'calculator_interaction'   // Mudança checks perfil
'calculator_submit'        // Clicou "Calcular Meu Potencial"
'faq_open'                 // Abriu pergunta
'final_cta_click'          // Botão final
'referral_link_click'      // 🎯 EVENTO CHAVE - Clique no link de indicação
'signup_start'             // Redirecionou para rewards.bing.com
```

### KPIs Alvo
| Métrica | Target |
|---------|--------|
| CTR Hero CTA | > 8% |
| CTR Final CTA | > 12% |
| Scroll Depth 75% | > 40% |
| Time on Page | > 90s |
| Referral Click Rate | > 5% |
| Bounce Rate | < 50% |

---

## 🚀 Roadmap de Implementação

### Sprint 1 - Foundation (2-3 dias)
- [ ] Setup Next.js + Tailwind + TypeScript
- [ ] Design tokens (cores, tipografia, espaçamento)
- [ ] Componentes base: Button, Card, Badge, Container, Section
- [ ] Layout base + Header + Footer
- [ ] Configurar Vercel/Deploy preview

### Sprint 2 - Core Sections (3-4 dias)
- [ ] Hero Section com badge animado
- [ ] Seção Recompensas (cards interativos)
- [ ] Seção "Como Ganhar" (3 colunas)
- [ ] Calculadora interativa (estado local)
- [ ] Animações scroll-reveal + contadores

### Sprint 3 - Trust & Conversion (2-3 dias)
- [ ] Depoimentos (carousel ou grid)
- [ ] FAQ Accordion acessível
- [ ] CTA Final otimizado
- [ ] Micro-interactions (pulse, hover states)
- [ ] Otimização imagens (WebP/AVIF, lazy load)

### Sprint 4 - Analytics & Polish (1-2 dias)
- [ ] GA4 + Clarity + Vercel Analytics
- [ ] Event tracking completo
- [ ] A/B test setup (middleware ou client-side)
- [ ] Testes cross-browser (Chrome, Edge, Firefox, Safari)
- [ ] Testes mobile (iOS Safari, Chrome Android)
- [ ] Performance audit (Lighthouse > 90)
- [ ] Acessibilidade (WCAG AA)

### Sprint 5 - Launch & Iterate (Contínuo)
- [ ] Deploy production
- [ ] Monitoramento primeira semana
- [ ] Heatmaps Clarity
- [ ] Primeiro A/B test
- [ ] Iteração baseada em dados

---

## 📱 Responsividade

### Breakpoints
```css
--bp-sm: 640px;   /* Mobile landscape */
--bp-md: 768px;   /* Tablet */
--bp-lg: 1024px;  /* Desktop */
--bp-xl: 1280px;  /* Large desktop */
--bp-2xl: 1536px; /* Ultra wide */
```

### Adaptações Mobile-First
- Hero: Stack vertical, badge full-width
- Recompensas: Carousel horizontal (scroll-snap) ou grid 2 cols
- Como Ganhar: Accordion ou stack vertical
- Calculadora: Stack vertical, inputs maiores (touch)
- Depoimentos: Carousel swipe
- CTA Buttons: Full width, min-height 56px (touch target)

---

## ♿ Acessibilidade (WCAG 2.1 AA)

- [ ] Contraste mínimo 4.5:1 (textos), 3:1 (UI)
- [ ] Focus visible em todos elementos interativos
- [ ] Skip link "Pular para conteúdo principal"
- [ ] ARIA labels em botões só com ícones
- [ ] Heading hierarchy correta (h1 → h2 → h3)
- [ ] Alt text em todas imagens/ícones decorativos
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Teclado: Tab order lógico, Escape fecha modais/accordion

---

## 🔒 LGPD / Compliance

- [ ] Banner de cookies (necessários + analytics opcional)
- [ ] Link "Política de Privacidade" no footer
- [ ] Disclaimer: "Site independente, não afiliado à Microsoft"
- [ ] Não coleta dados pessoais no landing
- [ ] Analytics anonimizado (GA4 + Clarity mask)

---

## 📝 Checklist Pré-Launch

### Funcionalidade
- [ ] Link de indicação abre em nova aba (`target="_blank" rel="noopener noreferrer"`)
- [ ] UTM parameters no link: `?utm_source=landing&utm_medium=referral&utm_campaign=welcome_bonus`
- [ ] Todos CTAs levam ao mesmo link de indicação
- [ ] Calculadora funciona sem JS (fallback) ou degrada graciosamente

### Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Imagens otimizadas (next/image ou picture + WebP)
- [ ] Fontes: `font-display: swap`, preload critical
- [ ] CSS/JS minificado + gzip/brotli

### SEO
- [ ] Title: "Microsoft Rewards Brasil: Ganhe 1.320 Pontos de Boas-Vindas + Xbox, Spotify, Gift Cards"
- [ ] Meta Description: "Cadastre-se grátis no Microsoft Rewards e ganhe 1.320 pontos imediatos. Resgate Xbox Game Pass, Spotify Premium 2 meses grátis, Amazon Gift Cards. Veja como ganhar pontos rápido."
- [ ] Open Graph / Twitter Cards completos
- [ ] JSON-LD Structured Data (WebSite, FAQPage, Product)
- [ ] Sitemap.xml + robots.txt
- [ ] Canonical URL

---

## 💡 Ideias Futuras (Pós-Launch)

1. **Página "Estratégias Avançadas"** - Deep dive para power users
2. **Extension/Userscript** - Auto-complete quizzes, track streaks
3. **Newsletter** - "Dica semanal de pontos" (captura email no final)
4. **Comunidade** - Discord/Telegram para trocar dicas
5. **Calculadora avançada** - Com metas personalizadas (ex: "quero 1 ano Game Pass")
6. **PWA** - Instalável, offline-first para dashboard de pontos

---

## 📌 Próximos Passos Imediatos

1. **Aprovar este plano** ou sugerir ajustes
2. **Definir stack** (Next.js + Tailwind recomendado)
3. **Criar repositório** + configurar CI/CD
4. **Iniciar Sprint 1** - Foundation

---

*Documento vivo - Atualizar conforme decisões de design e testes de usabilidade.*