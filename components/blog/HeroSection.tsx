'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export function HeroSection() {
  const { t } = useTranslations();
  
  // Split the description to highlight the developer name
  const description = t('hero.description');
  const parts = description.split('**Muhammed Ajmal cc**');
  
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-8 w-8 text-emerald-300" />
            <span className="text-emerald-300 font-medium">{t('hero.subtitle')}</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')} 
            <span className="text-emerald-300 block">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-emerald-100 mb-8 leading-relaxed">
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="font-bold text-emerald-300 bg-emerald-900/50 px-2 py-1 rounded">
                  Muhammed Ajmal cc
                </span>
                {parts[1]}
              </>
            ) : (
              description
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/category/prophet-muhammad">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group">
                {t('hero.startLearning')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-emerald-300 text-emerald-600 hover:bg-emerald-700">
                {t('hero.aboutProject')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}