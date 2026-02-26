'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { SavedSearch } from '@/types';
import { TrashIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function SavedSearchesPage() {
  const router = useRouter();
  const [savedSearches, setSavedSearches] = useLocalStorage<SavedSearch[]>(
    'savedSearches',
    []
  );
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [searchName, setSearchName] = useState('');

  // Check if there's an active search from the companies page
  const currentQuery = (router.query.query as string) || '';
  const currentFilters = router.query.filters ? JSON.parse(router.query.filters as string) : {};

  const handleSaveSearch = () => {
    if (!searchName.trim() && !currentQuery) return;

    const newSearch: SavedSearch = {
      id: `search-${Date.now()}`,
      name: searchName || 'Untitled Search',
      query: currentQuery,
      filters: currentFilters,
      createdAt: new Date().toISOString(),
    };

    setSavedSearches([...savedSearches, newSearch]);
    setSearchName('');
    setShowSaveModal(false);
  };

  const handleDeleteSearch = (searchId: string) => {
    setSavedSearches(savedSearches.filter((s) => s.id !== searchId));
  };

  const handleApplySearch = (search: SavedSearch) => {
    const queryParams = new URLSearchParams();
    if (search.query) queryParams.append('search', search.query);
    if (Object.keys(search.filters).length > 0) {
      queryParams.append('filters', JSON.stringify(search.filters));
    }
    router.push(`/companies?${queryParams.toString()}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Saved Searches</h1>

      {/* Save Current Search */}
      {currentQuery && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-4">Active Search</h2>
          <p className="text-blue-800 mb-4">
            Current search: <code className="bg-blue-100 px-2 py-1 rounded">{currentQuery}</code>
          </p>
          <button
            onClick={() => setShowSaveModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save This Search
          </button>

          {/* Save Search Modal */}
          {showSaveModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-bold mb-4">Save Search</h3>
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  placeholder="Name this search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveSearch}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setShowSaveModal(false);
                      setSearchName('');
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Saved Searches List */}
      {savedSearches.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          No saved searches yet. Search for companies and save your queries!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedSearches.map((search) => (
            <div
              key={search.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{search.name}</h3>

              <div className="mb-4">
                {search.query && (
                  <div className="mb-2">
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      Query
                    </p>
                    <p className="text-sm text-gray-700 break-words">
                      {search.query}
                    </p>
                  </div>
                )}

                {Object.keys(search.filters).length > 0 && (
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      Filters
                    </p>
                    <div className="text-sm text-gray-700">
                      {Object.entries(search.filters).map(([key, value]) => (
                        <p key={key}>
                          {key}: {String(value)}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Saved{' '}
                {new Date(search.createdAt || '').toLocaleDateString()}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleApplySearch(search)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <PlayIcon className="w-4 h-4" />
                  Apply
                </button>
                <button
                  onClick={() => handleDeleteSearch(search.id)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete search"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
