'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CompanyList } from '@/types';
import { exportToCSV, downloadCSV, downloadJSON } from '@/lib/export';
import companies from '@/data/companies.json';
import { PlusIcon, TrashIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function ListsPage() {
  const [lists, setLists] = useLocalStorage<CompanyList[]>('companyLists', []);
  const [newListName, setNewListName] = useState('');
  const [expandedListId, setExpandedListId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const handleCreateList = () => {
    if (!newListName.trim()) return;

    setCreating(true);
    setTimeout(() => {
      const newList: CompanyList = {
        id: `list-${Date.now()}`,
        name: newListName,
        companyIds: [],
        createdAt: new Date().toISOString(),
      };
      setLists([...lists, newList]);
      setNewListName('');
      setCreating(false);
    }, 300);
  };

  const handleDeleteList = (listId: string) => {
    setLists(lists.filter((l) => l.id !== listId));
    setExpandedListId(null);
  };

  const handleRemoveCompany = (listId: string, companyId: string) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          companyIds: list.companyIds.filter((id) => id !== companyId),
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handleExportCSV = (list: CompanyList) => {
    const listCompanies = (companies as any[]).filter((c) =>
      list.companyIds.includes(c.id)
    );
    const csv = exportToCSV(listCompanies);
    downloadCSV(csv, `${list.name}-companies.csv`);
  };

  const handleExportJSON = (list: CompanyList) => {
    const listCompanies = (companies as any[]).filter((c) =>
      list.companyIds.includes(c.id)
    );
    downloadJSON(listCompanies, `${list.name}-companies.json`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Lists</h1>

      {/* Create List Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-bold mb-4">Create New List</h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Enter list name..."
            onKeyPress={(e) => e.key === 'Enter' && handleCreateList()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCreateList}
            disabled={!newListName.trim() || creating}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            Create
          </button>
        </div>
      </div>

      {/* Lists */}
      {lists.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          No lists yet. Create your first list to organize companies!
        </div>
      ) : (
        <div className="space-y-4">
          {lists.map((list) => (
            <div key={list.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpandedListId(
                    expandedListId === list.id ? null : list.id
                  )
                }
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{list.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {list.companyIds.length} company/companies
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExportCSV(list);
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Export CSV"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExportJSON(list);
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Export JSON"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteList(list.id);
                    }}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Delete list"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Expanded List Contents */}
              {expandedListId === list.id && list.companyIds.length > 0 && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="space-y-2">
                    {list.companyIds.map((companyId) => {
                      const company = (companies as any[]).find(
                        (c) => c.id === companyId
                      );
                      return company ? (
                        <div
                          key={companyId}
                          className="flex items-center justify-between bg-white p-3 rounded border border-gray-200"
                        >
                          <div className="flex-1">
                            <Link
                              href={`/companies/${company.id}`}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              {company.name}
                            </Link>
                            <p className="text-sm text-gray-600">
                              {company.industry}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleRemoveCompany(list.id, companyId)
                            }
                            className="ml-4 p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Remove from list"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
