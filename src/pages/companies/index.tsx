'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import companies from '@/data/companies.json';
import CompanyTable from '@/components/CompanyTable';

export default function CompaniesPage() {
  const router = useRouter();
  const { search = '' } = router.query;
  const [searchQuery, setSearchQuery] = useState(Array.isArray(search) ? search[0] : search);
  const [industryFilter, setIndustryFilter] = useState('');

  // Get unique industries for filter
  const industries = useMemo(
    () => Array.from(new Set(companies.map((c) => c.industry))).sort(),
    []
  );

  // Apply both search and industry filter
  const filteredCompanies = useMemo(() => {
    let results = [...(companies as any[])];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (company) =>
          company.name.toLowerCase().includes(query) ||
          company.industry.toLowerCase().includes(query) ||
          company.description.toLowerCase().includes(query)
      );
    }

    if (industryFilter) {
      results = results.filter((company) => company.industry === industryFilter);
    }

    return results;
  }, [searchQuery, industryFilter]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Companies</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Search by name, industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Found {filteredCompanies.length} company/companies
        </div>
      </div>

      {/* Companies Table */}
      <CompanyTable companies={filteredCompanies} searchQuery={searchQuery} />
    </div>
  );
}
