'use client';

import Link from 'next/link';
import { Heart, BookOpen, Mail, Phone, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export function Footer() {
  const { t } = useTranslations();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-xl text-emerald-300">Islamic History</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <p className="text-sm text-gray-400">
              Educational content for learning and understanding Islamic heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-300">{t('footer.categories')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/prophet-muhammad" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  {t('navigation.prophetMuhammad')}
                </Link>
              </li>
              <li>
                <Link href="/category/early-islam" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  {t('navigation.earlyIslam')}
                </Link>
              </li>
              <li>
                <Link href="/category/companions" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  {t('navigation.companions')}
                </Link>
              </li>
              <li>
                <Link href="/category/civilization" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  {t('navigation.civilization')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-300">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Website developed by Muhammed Ajmalcc .
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Social Media Icons */}
            <Link 
              href="https://wa.me/7025715250" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.instagram.com/muhammed_ajmalcc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/your-linkedin-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-emerald-300 transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
    
          </div>
        </div>
      </div>
    </footer>
  );
}