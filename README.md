# VC Intelligence Interface

AI-powered platform for company research, enrichment, and portfolio analysis.

## Features

- **Company Database**: Browse and search through 15+ tech companies
- **AI Enrichment**: Get AI-powered insights with summaries, keywords, and market signals
- **Smart Lists**: Create custom lists and export companies as CSV/JSON
- **Saved Searches**: Save and apply search queries instantly
- **Personal Notes**: Add and save notes for each company
- **Responsive Design**: Works seamlessly on desktop and mobile

## Tech Stack

- **Framework**: Next.js 15+ with React 19
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **State Management**: React Context & localStorage
- **API**: Next.js API Routes
- **AI**: OpenAI API (GPT-3.5-turbo)
- **Web Scraping**: Axios + Cheerio
- **Icons**: Heroicons React
- **Export**: CSV and JSON support

## Prerequisites

- Node.js 18+ and npm
- OpenAI API key (for AI enrichment feature)

## Setup

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd vc-intelligence
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env.local`** with your API keys:
   ```bash
   OPENAI_API_KEY=sk-your-key-here
   FIRECRAWL_API_KEY=your-firecrawl-key-here  # Optional
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── pages/
│   ├── index.tsx              # Home page
│   ├── companies/
│   │   ├── index.tsx          # Companies list
│   │   └── [id].tsx           # Company profile
│   ├── lists.tsx              # Lists management
│   ├── saved.tsx              # Saved searches
│   ├── api/
│   │   └── enrich.ts          # Enrichment API endpoint
│   └── _app.tsx               # App shell
├── components/
│   ├── Layout.tsx             # Main layout with sidebar
│   ├── CompanyTable.tsx       # Companies table
│   └── EnrichmentSection.tsx  # AI enrichment display
├── lib/
│   ├── openai.ts              # OpenAI client
│   └── export.ts              # CSV/JSON export utilities
├── hooks/
│   └── useLocalStorage.ts     # localStorage persistence hook
├── data/
│   └── companies.json         # Mock company data
├── types/
│   └── index.ts               # TypeScript interfaces
└── styles/
    └── globals.css            # Global Tailwind styles
```

## Key Features Explained

### AI Enrichment
Click "Fetch Enrichment" on any company profile to get:
- **Summary**: 1-2 sentence overview
- **What They Do**: Key business bullets
- **Keywords**: Relevant industry keywords
- **Signals**: Market indicators
- **Sources**: Referenced URLs

The enrichment uses OpenAI's GPT-3.5-turbo model to analyze company data and generate insights.

### Lists Management
- Create custom lists to organize companies
- Add companies from their profile page
- Export lists as CSV or JSON
- View and manage companies in each list

### Saved Searches
- Save search queries and filters
- Quickly apply saved searches with one click
- Manage all saved queries from the Saved Searches page

### Local Data Persistence
All data is stored in browser localStorage:
- Company notes
- Created lists
- Saved searches
- Enrichment data cache

## Development

### Add a New Company
Edit `src/data/companies.json` to add mock companies:

```json
{
  "id": "c16",
  "name": "Company Name",
  "description": "Company description",
  "industry": "Industry",
  "website": "https://example.com",
  "founded": 2020,
  "employees": 100
}
```

### Using Firecrawl (Optional)
For advanced web scraping, integrate Firecrawl:

```bash
npm install @firecrawl/sdk
```

Then update `/api/enrich.ts` to use Firecrawl for better content extraction.

## Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `OPENAI_API_KEY`: Your OpenAI API key
   - Click "Deploy"

Your app will auto-deploy on every push to main branch.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes (for enrichment) | OpenAI API key for GPT models |
| `FIRECRAWL_API_KEY` | No | Firecrawl API key for advanced web scraping |

## Performance Tips

- Enrichment API uses GPT-3.5-turbo for cost efficiency
- Website content is extracted via Cheerio (fast HTML parsing)
- localStorage caches enrichment results
- Images and media are not fetched to keep payload small

## Troubleshooting

### "OPENAI_API_KEY is not defined"
- Ensure `.env.local` file exists with valid API key
- Restart development server after adding .env.local

### Companies list is empty
- Check that `src/data/companies.json` exists
- Verify mock data file is properly formatted JSON

### Enrichment returns mock data
- This is normal if API key is missing or API call fails
- Check OpenAI API status and quota

## File Size & Performance

- Initial bundle: ~150KB (gzipped)
- Mock data: ~2KB
- First contentful paint: <2s
- API response time: ~3-8s for enrichment

## Future Enhancements

- [ ] Real company data integration (Crunchbase, PitchBook)
- [ ] User authentication and accounts
- [ ] Advanced filtering and sorting
- [ ] Email alerts for saved searches
- [ ] Collaborative lists sharing
- [ ] Company comparison tools
- [ ] Investment portfolio tracking
- [ ] Custom enrichment templates

## License

MIT

## Support

For issues or questions, please create a GitHub issue or contact the development team.
