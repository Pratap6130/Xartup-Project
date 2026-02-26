export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  website: string;
  founded?: number;
  employees?: number;
}

export interface CompanyList {
  id: string;
  name: string;
  companyIds: string[];
  createdAt?: string;
}

export interface SavedSearch {
  id: string;
  name: string;
  query: string;
  filters: Record<string, any>;
  createdAt?: string;
}

export interface CompanyNote {
  companyId: string;
  content: string;
  updatedAt?: string;
}

export interface EnrichmentData {
  summary: string;
  whatTheyDo: string[];
  keywords: string[];
  signals: string[];
  sources: string[];
  fetchedAt: string;
}
