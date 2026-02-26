'use client';

import Link from 'next/link';
import { RocketLaunchIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const features = [
    {
      title: 'Company Database',
      description: 'Browse and search through a comprehensive database of companies',
      link: '/companies',
    },
    {
      title: 'AI Enrichment',
      description: 'Get AI-powered insights about any company',
      link: '/companies',
    },
    {
      title: 'Smart Lists',
      description: 'Organize companies into custom lists and export data',
      link: '/lists',
    },
    {
      title: 'Saved Searches',
      description: 'Save your favorite searches for quick access',
      link: '/saved',
    },
  ];

  return (
    <div>
      <div className="text-center py-12">
        <RocketLaunchIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          VC Intelligence Interface
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI-powered platform for company research, enrichment, and portfolio analysis.
          Get intelligent insights with a single click.
        </p>

        <Link
          href="/companies"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started →
        </Link>
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <Link
            key={idx}
            href={feature.link}
            className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            ✨ <strong>Search:</strong> Browse our database of tech companies across various industries.
          </p>
          <p>
            🤖 <strong>Enrich:</strong> Click "Fetch Enrichment" on any company to get AI-generated insights
            including summaries, keywords, and market signals.
          </p>
          <p>
            📝 <strong>Organize:</strong> Create lists, save searches, and add notes for your research.
          </p>
          <p>
            💾 <strong>Export:</strong> Download your curated lists as CSV or JSON for further analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
