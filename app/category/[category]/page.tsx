import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/blog/Sidebar';

const categoryData: { [key: string]: any } = {
  'prophet-muhammad': {
    title: 'Prophet Muhammad (PBUH)',
    description: 'Learn about the life, teachings, and example of Prophet Muhammad (Peace Be Upon Him)',
    posts: [
      {
        id: 1,
        title: "The Birth and Early Life of Prophet Muhammad (PBUH)",
        excerpt: "Explore the early years of Prophet Muhammad in Mecca, from his birth in 570 CE to his marriage with Khadijah (RA).",
        image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Islamic Scholar",
        date: "March 15, 2024",
        readTime: "8 min read",
        slug: "birth-early-life-prophet-muhammad"
      },
      {
        id: 2,
        title: "The First Revelation and Beginning of Prophethood",
        excerpt: "The transformative moment in Cave Hira when Angel Gabriel first appeared to Prophet Muhammad with the message of Islam.",
        image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Dr. Ahmad Hassan",
        date: "March 12, 2024",
        readTime: "10 min read",
        slug: "first-revelation-beginning-prophethood"
      },
    ]
  },
  'early-islam': {
    title: 'Early Islam',
    description: 'Discover the foundation and early development of the Islamic community',
    posts: [
      {
        id: 3,
        title: "The Migration to Medina (Hijra) - A Turning Point",
        excerpt: "Understanding the significance of the Hijra and how it marked the beginning of the Islamic calendar.",
        image: "https://images.pexels.com/photos/8728264/pexels-photo-8728264.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Dr. Fatima Al-Zahra",
        date: "March 10, 2024",
        readTime: "6 min read",
        slug: "migration-medina-hijra"
      }
    ]
  },
  'companions': {
    title: 'Companions of the Prophet',
    description: 'Learn about the noble companions (Sahaba) who supported and followed Prophet Muhammad (PBUH)',
    posts: [
      {
        id: 4,
        title: "Abu Bakr (RA) - The Truthful Companion",
        excerpt: "Discover the life and contributions of Abu Bakr As-Siddiq, the first Caliph and closest companion of Prophet Muhammad.",
        image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Dr. Omar Al-Rashid",
        date: "March 8, 2024",
        readTime: "7 min read",
        slug: "abu-bakr-truthful-companion"
      },
      {
        id: 5,
        title: "Umar ibn Al-Khattab (RA) - The Just Leader",
        excerpt: "Explore the remarkable leadership and justice of Umar ibn Al-Khattab, the second Caliph of Islam.",
        image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Prof. Aisha Rahman",
        date: "March 5, 2024",
        readTime: "9 min read",
        slug: "umar-ibn-khattab-just-leader"
      }
    ]
  },
  'civilization': {
    title: 'Islamic Civilization',
    description: 'Explore the golden age of Islamic civilization and its contributions to science, art, and culture',
    posts: [
      {
        id: 6,
        title: "The House of Wisdom - Center of Learning",
        excerpt: "Discover how the House of Wisdom in Baghdad became the epicenter of knowledge and translation during the Islamic Golden Age.",
        image: "https://images.pexels.com/photos/8728264/pexels-photo-8728264.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Dr. Hassan Al-Baghdadi",
        date: "March 3, 2024",
        readTime: "12 min read",
        slug: "house-of-wisdom-center-learning"
      },
      {
        id: 7,
        title: "Islamic Contributions to Mathematics and Science",
        excerpt: "Learn about the groundbreaking contributions of Muslim scholars to mathematics, astronomy, medicine, and other sciences.",
        image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Dr. Layla Al-Kindi",
        date: "February 28, 2024",
        readTime: "15 min read",
        slug: "islamic-contributions-mathematics-science"
      }
    ]
  }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category];

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Category Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.posts.map((post: any) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      <Link href={`/posts/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { category: 'prophet-muhammad' },
    { category: 'early-islam' },
    { category: 'companions' },
    { category: 'civilization' },
  ];
}