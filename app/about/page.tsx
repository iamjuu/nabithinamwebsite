import Link from 'next/link';
import { BookOpen, Target, Users, Heart, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Islamic History</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to preserve and share the rich heritage of Islamic history through 
            carefully researched and respectfully presented educational content.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide well-researched, accurate, and engaging content about Islamic history, 
                making it accessible to learners of all backgrounds and levels of knowledge.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Sources</h3>
              <p className="text-gray-600 leading-relaxed">
                All our content is based on authentic historical sources and scholarly research, 
                ensuring accuracy and reliability in every article we publish.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in fostering a community of learners who can explore and understand 
                Islamic history together, promoting knowledge and mutual understanding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Respectful Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We approach all topics with the utmost respect and reverence, ensuring that 
                our content honors the sacred nature of Islamic history and heritage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Purpose</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Islamic History is dedicated to making the rich heritage of Islam accessible to everyone. 
                We focus particularly on the life and teachings of Prophet Muhammad (Peace Be Upon Him), 
                the stories of his companions, and the development of early Islamic civilization.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our content covers various aspects of Islamic history, from the personal character 
                and daily life of the Prophet to the major events that shaped the early Muslim community. 
                We also explore the contributions of Islamic civilization to art, science, philosophy, 
                and governance throughout history.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What You'll Find Here</h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Detailed articles about Prophet Muhammad's (PBUH) life and teachings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Stories of the Companions and their contributions to Islam</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Historical accounts of early Islamic community development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Insights into Islamic civilization and its global impact</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Educational resources for understanding Islamic heritage</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-6">
                All content is presented with respect, accuracy, and a commitment to educational excellence. 
                We welcome learners from all backgrounds who wish to understand and appreciate the 
                profound impact of Islamic history on world civilization.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Exploring Articles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}