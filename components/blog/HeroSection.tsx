import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-8 w-8 text-emerald-300" />
            <span className="text-emerald-300 font-medium">Educational Heritage</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Learn About 
            <span className="text-emerald-300 block">Islamic History</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-emerald-100 mb-8 leading-relaxed">
            Discover the rich heritage of Islam, learn about Prophet Muhammad (Peace Be Upon Him), 
            and explore the golden age of Islamic civilization through carefully researched articles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/category/prophet-muhammad">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-emerald-300 text-emerald-600 hover:bg-emerald-700">
                About This Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}