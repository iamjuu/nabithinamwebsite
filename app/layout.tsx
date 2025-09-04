import './globals.css';
import type { Metadata } from 'next';
import { Inter, Amiri } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const amiri = Amiri({ 
  subsets: ['arabic', 'latin'], 
  weight: ['400', '700'],
  variable: '--font-amiri'
});

export const metadata: Metadata = {
  title: 'Islamic History - Learn About Prophet Muhammad (PBUH) and Islamic Heritage',
  description: 'Discover the rich history of Islam, learn about Prophet Muhammad (PBUH), and explore Islamic heritage through carefully researched articles and stories.',
  keywords: 'Islamic history, Prophet Muhammad, Islamic heritage, Islamic studies, religious education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}