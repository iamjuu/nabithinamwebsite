'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export function Header() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Use fixed language (English) for navigation items so navbar doesn't change
  const navigation = [
    { name: t('en', 'navigation.home'), href: '/' },
    { name: t('en', 'navigation.prophetMuhammad'), href: '/category/prophet-muhammad' },
    { name: t('en', 'navigation.earlyIslam'), href: '/category/early-islam' },
    { name: t('en', 'navigation.companions'), href: '/category/companions' },
    { name: t('en', 'navigation.civilization'), href: '/category/civilization' },
    { name: t('en', 'navigation.about'), href: '/about' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">IH</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Islamic History</h1>
              <p className="text-xs text-green-600 font-medium">Educational Heritage</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search, Language Switcher and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-green-600"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Switcher - Hidden on mobile */}
            <div className="hidden sm:block">
              <LanguageSwitcher
                currentLanguage={currentLanguage.code}
                onLanguageChange={setLanguage}
              />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-green-100">
            <div className="max-w-md mx-auto">
              <Input
                placeholder={t('en', 'common.search')}
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-green-100">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher for Mobile */}
              <div className="pt-4 border-t border-green-100">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{t('en', 'common.language')}:</span>
                </div>
                <LanguageSwitcher
                  currentLanguage={currentLanguage.code}
                  onLanguageChange={(language) => {
                    setLanguage(language);
                    setIsMenuOpen(false);
                  }}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}