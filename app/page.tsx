import { FeaturedArticles } from '@/components/blog/FeaturedArticles';
import { LatestPosts } from '@/components/blog/LatestPosts';
import { Sidebar } from '@/components/blog/Sidebar';
import { HeroSection } from '@/components/blog/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <FeaturedArticles />
            <LatestPosts />
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