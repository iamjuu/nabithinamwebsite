import Link from 'next/link';
import { Search, TrendingUp, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { name: 'Prophet Muhammad (PBUH)', count: 15, href: '/category/prophet-muhammad' },
  { name: 'Early Islam', count: 12, href: '/category/early-islam' },
  { name: 'Companions', count: 10, href: '/category/companions' },
  { name: 'Islamic Civilization', count: 8, href: '/category/civilization' },
  { name: 'Battles & Events', count: 6, href: '/category/events' },
];

const recentPosts = [
  {
    title: "The Night Journey (Isra and Mi'raj)",
    date: "March 18, 2024",
    slug: "night-journey-isra-miraj"
  },
  {
    title: "The Constitution of Medina",
    date: "March 16, 2024", 
    slug: "constitution-medina"
  },
  {
    title: "The Battle of Badr - First Victory",
    date: "March 14, 2024",
    slug: "battle-of-badr"
  },
  {
    title: "Umar ibn Al-Khattab (RA) - The Just Ruler",
    date: "March 11, 2024",
    slug: "umar-ibn-al-khattab"
  }
];

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="border-emerald-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Search className="h-5 w-5 mr-2 text-emerald-600" />
            Search Articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for articles..."
              className="pl-10 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-emerald-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                <span className="font-medium text-gray-700 group-hover:text-emerald-700">
                  {category.name}
                </span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  {category.count}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border-emerald-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.title}
                href={`/posts/${post.slug}`}
                className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                <h4 className="font-medium text-gray-900 group-hover:text-emerald-700 mb-1 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">{post.date}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-50">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get notified about new articles on Islamic history and heritage.
          </p>
          <div className="space-y-3">
            <Input
              placeholder="Your email address"
              className="border-emerald-200 focus:border-emerald-500"
            />
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}