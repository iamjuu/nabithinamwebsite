'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

export function FeaturedArticles() {
  const { t } = useTranslations();

  const featuredArticles = [
    {
      id: 1,
      title: t('articles.birthTitle'),
      excerpt: t('articles.birthExcerpt'),
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: t('navigation.prophetMuhammad'),
      author: "Islamic Scholar",
      date: "March 15, 2024",
      readTime: `8 ${t('common.minRead')}`,
      slug: "birth-early-life-prophet-muhammad"
    },
    {
      id: 2,
      title: t('articles.revelationTitle'),
      excerpt: t('articles.revelationExcerpt'),
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: t('navigation.earlyIslam'),
      author: "Dr. Ahmad Hassan",
      date: "March 12, 2024",
      readTime: `10 ${t('common.minRead')}`,
      slug: "first-revelation-beginning-prophethood"
    }
  ];
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('articles.featuredTitle')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredArticles.map((article) => (
          <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  {article.category}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                <Link href={`/posts/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}