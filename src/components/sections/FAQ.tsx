/**
 * FAQ Section - Accordion for common objections
 */

'use client';

import { useState } from 'react';
import { Card, CardContent, Stack, Flex, Badge } from '@/components/ui';
import { Icon } from '@/components/ui/Icons';
import { FAQ_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { trackFAQInteraction } from '@/lib/analytics';

interface FAQProps {
  className?: string;
}

export function FAQ({ className }: FAQProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Open first by default

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => {
      const isOpen = prev.includes(index);
      const next = isOpen
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      trackFAQInteraction(FAQ_ITEMS[index].id, isOpen ? 'close' : 'open');
      return next;
    });
  };

  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      className={cn('bg-white dark:bg-gray-950 py-20 md:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" size="md" className="mb-4" dot>
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Respondemos as principais perguntas para você começar com confiança.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" role="list" aria-label="Perguntas frequentes">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={item.id}
                index={index}
                item={item}
                isOpen={openIndices.includes(index)}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>

          {/* CTA after FAQ */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Não encontrou sua dúvida?
            </p>
            <a
              href="https://rewards.bing.com/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Ver todas as FAQs no site oficial
              <Icon name="external-link" size="sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  index: number;
  item: typeof FAQ_ITEMS[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ index, item, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card
      variant="default"
      className={cn('overflow-hidden', isOpen && 'ring-2 ring-blue-500/20')}
      role="listitem"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-4 focus:ring-blue-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <div className="flex items-center gap-3 flex-1">
          <span className={cn(
            'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold',
            isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          )}>
            {index + 1}
          </span>
          <h3 className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">
            {item.question}
          </h3>
        </div>
        <Icon
          name="chevron-down"
          size="md"
          className={cn(
            'flex-shrink-0 text-gray-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          aria-hidden={true}
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={cn('overflow-hidden transition-all duration-300 ease-out', isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}
      >
        <CardContent className="px-6 pb-6">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.answer}</p>
        </CardContent>
      </div>
    </Card>
  );
}