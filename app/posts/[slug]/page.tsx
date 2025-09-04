import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sidebar } from '@/components/blog/Sidebar';

// This would typically come from a database or CMS
const getPostBySlug = (slug: string) => {
  const posts: { [key: string]: any } = {
    'birth-early-life-prophet-muhammad': {
      title: "The Birth and Early Life of Prophet Muhammad (PBUH)",
      content: `
        <p>Prophet Muhammad (Peace Be Upon Him) was born in Mecca in the year 570 CE, during what was known as the "Year of the Elephant." His birth occurred during a time of great significance, as it was the year when Abraha, the ruler of Yemen, attempted to destroy the Kaaba with his army that included elephants.</p>

        <h2>Early Childhood and Orphanhood</h2>
        <p>The Prophet's father, Abdullah ibn Abd al-Muttalib, passed away before his birth. His mother, Aminah bint Wahb, cared for him during his earliest years. Following the custom of noble Arab families, the infant Muhammad was sent to live with a Bedouin wet nurse named Halimah al-Sa'diyah in the desert, where he could grow strong and learn the pure Arabic language.</p>

        <p>During his time with Halimah's family, several miraculous events occurred that indicated his special nature. The family experienced unprecedented prosperity, and their animals were always well-fed and healthy. When Muhammad was about four years old, Halimah returned him to his mother Aminah in Mecca.</p>

        <h2>Loss of Parents and Grandfather's Care</h2>
        <p>Tragedy struck when Muhammad was only six years old - his beloved mother Aminah died during a journey to visit his father's grave in Medina. The young orphan was then taken into the care of his grandfather, Abd al-Muttalib, who was the leader of the Hashim clan and held great respect in Meccan society.</p>

        <p>Abd al-Muttalib had a special affection for his grandson and would often take him to sit beside him during tribal meetings, recognizing something unique in the child. However, when Muhammad was eight years old, his grandfather also passed away, leaving him once again without a primary caregiver.</p>

        <h2>Under Abu Talib's Protection</h2>
        <p>Following his grandfather's death, Muhammad came under the protection and care of his uncle Abu Talib, who was Abd al-Muttalib's son and the new leader of the Hashim clan. Abu Talib treated Muhammad with great kindness and raised him alongside his own children.</p>

        <p>During his youth, Muhammad was known for his exceptional character, honesty, and trustworthiness. The people of Mecca called him "Al-Amin" (The Trustworthy) and "As-Sadiq" (The Truthful), even before his prophethood. He never participated in the idol worship that was prevalent in Mecca and always maintained the highest moral standards.</p>

        <h2>Early Work and Character Development</h2>
        <p>As a young man, Muhammad worked as a merchant and shepherd. These professions taught him valuable lessons about leadership, responsibility, and caring for others. His reputation for honesty and integrity in business dealings became well-known throughout Mecca and the surrounding regions.</p>

        <p>During his twenties, Muhammad's exceptional character caught the attention of Khadijah bint Khuwaylid, a wealthy and respected businesswoman. She employed him to manage her trading caravans, and was so impressed by his honesty and competence that she eventually proposed marriage to him when he was 25 and she was 40.</p>

        <h2>Marriage to Khadijah (RA)</h2>
        <p>The marriage between Muhammad and Khadijah was one of love, respect, and mutual support. Khadijah was not only his wife but also his closest friend and confidante. She provided him with emotional support and financial stability that allowed him to focus on spiritual contemplation and helping the poor and needy in Mecca.</p>

        <p>Together, they had several children: four daughters (Zainab, Ruqayyah, Umm Kulthum, and Fatimah) and two sons (Al-Qasim and Abdullah), though both sons died in infancy. Their marriage lasted for 25 years until Khadijah's death, and during this entire period, Muhammad did not take any other wives, showing his deep devotion to her.</p>

        <h2>Spiritual Contemplation and Preparation</h2>
        <p>As Muhammad approached the age of 40, he began spending increasing amounts of time in spiritual contemplation. He would often retreat to the Cave of Hira on Mount Al-Nour (Mountain of Light) outside Mecca, where he would meditate on the state of society and worship Allah in solitude.</p>

        <p>These periods of reflection prepared him spiritually for the great responsibility that was to come. The early years of his life - marked by loss, hardship, but also by the development of exceptional character - served as a foundation for his future role as the final messenger of Allah.</p>
      `,
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Prophet Muhammad",
      author: "Islamic Scholar",
      date: "March 15, 2024",
      readTime: "8 min read"
    }
  };

  return posts[slug] || null;
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
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
            Back to Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-emerald-600 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 md:p-12">
                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Share Button */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600 font-medium">Share this article:</span>
                    <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-emerald-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="h-6 w-6 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Educational Purpose</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          This article is part of our educational series on Islamic history. 
                          All content is researched and presented for learning purposes to help 
                          people understand the rich heritage of Islam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

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
    { slug: 'birth-early-life-prophet-muhammad' },
    { slug: 'first-revelation-beginning-prophethood' },
    { slug: 'migration-medina-hijra' },
    { slug: 'abu-bakr-first-caliph' },
  ];
}