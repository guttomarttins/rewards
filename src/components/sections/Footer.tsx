/**
 * Footer Component
 */

'use client';

import { Flex, Stack, Container } from '@/components/ui';
import { Icon } from '@/components/ui/Icons';
import { FOOTER_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      role="contentinfo"
    >
      <Container size="lg" className="py-12 md:py-16">
        <Flex column gap="2xl" className="w-full">
          {/* Main Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="Produto" links={FOOTER_LINKS.product} />
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
            <FooterColumn title="Suporte" links={FOOTER_LINKS.support} />
            <FooterColumn
              title="Conecte-se"
              links={[
                { label: 'Twitter', href: 'https://twitter.com/MSRewards' },
                { label: 'YouTube', href: 'https://youtube.com/xbox' },
                { label: 'Discord', href: 'https://discord.gg/xbox' },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 dark:bg-gray-800" aria-hidden="true" />

          {/* Bottom Row */}
          <Flex align="center" justify="between" wrap gap="md" className="text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <IconBox name="gift" size="sm" variant="gold" />
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Microsoft Rewards Brasil
              </span>
            </div>

            <p>
              © {currentYear} Microsoft.{' '}
              <a
                href="https://www.microsoft.com/pt-br/legal/intellectualproperty/copyright/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700 dark:hover:text-gray-300"
              >
                Todos os direitos reservados
              </a>.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://rewards.bing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Painel Oficial
              </a>
              <a
                href="https://privacy.microsoft.com/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Privacidade
              </a>
            </div>
          </Flex>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 dark:text-gray-500 text-center p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
              ⚠️ Aviso Importante
            </p>
            <p>
              Este site é um projeto independente de divulgação do programa Microsoft Rewards.
              Não somos afiliados, endossados ou patrocinados pela Microsoft Corporation.
              Todas as marcas registradas pertencem aos seus respectivos proprietários.
              Os valores de pontos e recompensas estão sujeitos a alteração pela Microsoft.
            </p>
          </div>
        </Flex>
      </Container>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{title}</h4>
      <ul className="space-y-2" role="list">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * IconBox inline for Footer
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