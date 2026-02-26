'use client';

import { useState } from 'react';
import { EnrichmentData } from '@/types';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface EnrichmentSectionProps {
  companyId: string;
  companyName: string;
  website: string;
  onEnrichmentLoad?: (data: EnrichmentData) => void;
}

export default function EnrichmentSection({
  companyId,
  companyName,
  website,
  onEnrichmentLoad,
}: EnrichmentSectionProps) {
  const [loading, setLoading] = useState(false);
  const [enrichment, setEnrichment] = useState<EnrichmentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchEnrichment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/enrich', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyId, companyName, website }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch enrichment data');
      }

      const data = await response.json();
      setEnrichment(data);
      onEnrichmentLoad?.(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-yellow-500" />
          AI Enrichment
        </h2>
        <button
          onClick={fetchEnrichment}
          disabled={loading}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Fetching...' : 'Fetch Enrichment'}
        </button>
      </div>

      {error && (
        <div className="text-red-600 text-sm mb-4 p-3 bg-red-50 rounded">
          {error}
        </div>
      )}

      {enrichment ? (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
            <p className="text-gray-700">{enrichment.summary}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What They Do</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {enrichment.whatTheyDo.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {enrichment.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Derived Signals</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {enrichment.signals.map((signal, idx) => (
                <li key={idx}>{signal}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Sources</h3>
            <p className="text-sm text-gray-600">
              Fetched at: {new Date(enrichment.fetchedAt).toLocaleString()}
            </p>
            <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
              {enrichment.sources.map((source, idx) => (
                <li key={idx}>
                  <a href={source} target="_blank" rel="noopener noreferrer">
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-gray-500 text-center py-8">
          {loading ? 'Loading enrichment data...' : 'Click "Fetch Enrichment" to get AI insights'}
        </div>
      )}
    </div>
  );
}
