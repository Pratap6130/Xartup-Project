'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import companies from '@/data/companies.json';
import { CompanyList, EnrichmentData } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import EnrichmentSection from '@/components/EnrichmentSection';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function CompanyProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [notes, setNotes] = useLocalStorage<Record<string, string>>('companyNotes', {});
  const [lists, setLists] = useLocalStorage<CompanyList[]>('companyLists', []);
  const [enrichmentData, setEnrichmentData] = useLocalStorage<Record<string, EnrichmentData>>(
    'enrichmentData',
    {}
  );

  const [currentNote, setCurrentNote] = useState('');
  const [saving, setSaving] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [selectedList, setSelectedList] = useState<string | null>(null);

  // Find company
  const company = (companies as any[]).find((c) => c.id === id);

  // Load note on mount
  useEffect(() => {
    if (id && notes[id as string]) {
      setCurrentNote(notes[id as string]);
    }
  }, [id, notes]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!company) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Company not found</p>
        <Link href="/companies" className="text-blue-600 hover:underline">
          ← Back to Companies
        </Link>
      </div>
    );
  }

  const handleSaveNote = () => {
    setSaving(true);
    setTimeout(() => {
      setNotes({
        ...notes,
        [id as string]: currentNote,
      });
      setSaving(false);
    }, 300);
  };

  const handleAddToList = () => {
    if (!selectedList && !newListName) return;

    let listId = selectedList;
    let updatedLists = [...lists];

    if (!listId && newListName) {
      const newId = `list-${Date.now()}`;
      updatedLists.push({
        id: newId,
        name: newListName,
        companyIds: [],
        createdAt: new Date().toISOString(),
      });
      listId = newId;
      setNewListName('');
    }

    const listIndex = updatedLists.findIndex((l) => l.id === listId);
    if (listIndex !== -1 && !updatedLists[listIndex].companyIds.includes(id as string)) {
      updatedLists[listIndex].companyIds.push(id as string);
    }

    setLists(updatedLists);
    setSelectedList(null);
    setShowListModal(false);
  };

  return (
    <div>
      <Link
        href="/companies"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ChevronLeftIcon className="w-4 h-4" />
        Back to Companies
      </Link>

      {/* Company Overview */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{company.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{company.description}</p>
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="text-sm text-gray-500">Industry</span>
              <p className="font-semibold text-gray-900">{company.industry}</p>
            </div>
            {company.employees && (
              <div>
                <span className="text-sm text-gray-500">Employees</span>
                <p className="font-semibold text-gray-900">{company.employees}</p>
              </div>
            )}
            {company.founded && (
              <div>
                <span className="text-sm text-gray-500">Founded</span>
                <p className="font-semibold text-gray-900">{company.founded}</p>
              </div>
            )}
          </div>
        </div>

        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Visit Website →
        </a>
      </div>

      {/* AI Enrichment Section */}
      <div className="mb-8">
        <EnrichmentSection
          companyId={company.id}
          companyName={company.name}
          website={company.website}
          onEnrichmentLoad={(data) => {
            setEnrichmentData({
              ...enrichmentData,
              [company.id]: data,
            });
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Notes Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <textarea
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              placeholder="Add your personal notes about this company..."
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSaveNote}
              disabled={saving}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {saving ? 'Saving...' : 'Save Note'}
            </button>
          </div>
        </div>

        {/* Actions Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-8">
            <h2 className="text-xl font-bold mb-4 ">Actions</h2>

            <button
              onClick={() => setShowListModal(true)}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add to List
            </button>

            {/* List Modal */}
            {showListModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <h3 className="text-lg font-bold mb-4">Add to List</h3>

                  {lists.length > 0 && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select existing list
                      </label>
                      <select
                        value={selectedList || ''}
                        onChange={(e) => {
                          setSelectedList(e.target.value || null);
                          setNewListName('');
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Choose a list...</option>
                        {lists.map((list) => (
                          <option key={list.id} value={list.id}>
                            {list.name} ({list.companyIds.length})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or create new list
                    </label>
                    <input
                      type="text"
                      value={newListName}
                      onChange={(e) => {
                        setNewListName(e.target.value);
                        setSelectedList(null);
                      }}
                      placeholder="List name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleAddToList}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        setShowListModal(false);
                        setSelectedList(null);
                        setNewListName('');
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
