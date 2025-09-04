'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

export function LatestPosts() {
  const { t } = useTranslations();

  const latestPosts = [
    {
      id: 3,
      title: t('articles.migrationTitle'),
      excerpt: t('articles.migrationExcerpt'),
      image: "https://images.pexels.com/photos/8728264/pexels-photo-8728264.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: t('navigation.prophetMuhammad'),
      author: "Dr. Fatima Al-Zahra",
      date: "March 10, 2024",
      readTime: `6 ${t('common.minRead')}`,
      slug: "migration-medina-hijra"
    },
    {
      id: 4,
      title: t('articles.abuBakrTitle'),
      excerpt: t('articles.abuBakrExcerpt'),
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: t('navigation.companions'),
      author: "Sheikh Omar Abdullah",
      date: "March 8, 2024",
      readTime: `7 ${t('common.minRead')}`,
      slug: "abu-bakr-first-caliph"
    },
    {
      id: 5,
      title: "The Construction of the First Mosque in Medina",
      excerpt: "How the Prophet established the first mosque and center of the Muslim community in Medina.",
      image: "https://images.pexels.com/photos/8728277/pexels-photo-8728277.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: t('navigation.earlyIslam'),
      author: "Dr. Hassan Mahmoud",
      date: "March 5, 2024",
      readTime: `5 ${t('common.minRead')}`,
      slug: "first-mosque-medina"
    },
    {
      id: 6,
      title: "The Treaty of Hudaybiyyah - Diplomatic Wisdom",
      excerpt: "Analyzing the strategic importance and wisdom behind this pivotal peace treaty.",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: t('navigation.prophetMuhammad'),
      author: "Prof. Aisha Rahman",
      date: "March 3, 2024",
      readTime: `9 ${t('common.minRead')}`,
      slug: "treaty-hudaybiyyah"
    },
    {
      id: 7,
      title: "Khadijah (RA) - The First Believer and Supporter",
      excerpt: "The remarkable story of Prophet Muhammad's first wife and her crucial support in early Islam.",
      image: "https://images.pexels.com/photos/8728264/pexels-photo-8728264.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: t('navigation.companions'),
      author: "Dr. Maryam Hassan",
      date: "March 1, 2024",
      readTime: `6 ${t('common.minRead')}`,
      slug: "khadijah-first-believer"
    },
    {
      id: 8,
      title: "The Golden Age of Baghdad - Islamic Civilization",
      excerpt: "Explore the intellectual and cultural achievements during the Abbasid Caliphate.",
      image: "https://images.pexels.com/photos/8728277/pexels-photo-8728277.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: t('navigation.civilization'),
      author: "Dr. Yusuf Al-Masri",
      date: "February 28, 2024",
      readTime: `12 ${t('common.minRead')}`,
      slug: "golden-age-baghdad"
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{t('articles.latestTitle')}</h2>
        <Link href="/posts" className="text-emerald-600 hover:text-emerald-700 font-medium">
          {t('common.readMore')} →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {latestPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                  {post.category}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}