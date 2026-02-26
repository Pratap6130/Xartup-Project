import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import openai from '@/lib/openai';
import { EnrichmentData } from '@/types';

// Mock enrichment data generator (fallback when API calls fail)
function generateMockEnrichment(companyName: string): EnrichmentData {
  return {
    summary: `${companyName} is a innovative technology company providing cutting-edge solutions in their industry.`,
    whatTheyDo: [
      `Develops advanced software and services for enterprise customers`,
      `Provides integration with leading industry platforms`,
      `Offers dedicated support and consulting services`,
      `Focuses on scalability and security`,
    ],
    keywords: [
      'Technology',
      'Enterprise',
      'Innovation',
      'SaaS',
      'Cloud Solutions',
      'Digital Transformation',
    ],
    signals: [
      'Growing market demand in the sector',
      'Strong focus on customer success',
      'Investment in R&D',
      'Partnership opportunities available',
    ],
    sources: ['https://www.crunchbase.com', 'https://www.linkedin.com'],
    fetchedAt: new Date().toISOString(),
  };
}

async function fetchWebsiteContent(url: string): Promise<string> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 10000,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching website:', error);
    return '';
  }
}

async function extractTextFromHTML(html: string): Promise<string> {
  try {
    // Simple HTML tag removal
    const text = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return text.substring(0, 2000); // Limit to 2000 chars for API efficiency
  } catch (error) {
    return '';
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    // Return mock data if no API key
    return res.status(200).json(generateMockEnrichment(req.body.companyName));
  }

  const { companyName, website } = req.body;

  if (!companyName || !website) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Fetch website content
    let contentText = '';
    try {
      const html = await fetchWebsiteContent(website);
      contentText = await extractTextFromHTML(html);
    } catch (error) {
      console.error('Error fetching content:', error);
      // Continue with just company name if we can't fetch content
    }

    const prompt = `You are an expert business analyst. Based on the following company information, provide a comprehensive enrichment response in JSON format.

Company: ${companyName}
Website: ${website}
${contentText ? `Website Content (excerpt): ${contentText}` : 'Website content unavailable'}

Please provide a JSON response with these exact fields:
{
  "summary": "1-2 sentence summary of what the company does",
  "whatTheyDo": ["bullet point 1", "bullet point 2", "bullet point 3", "bullet point 4"],
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"],
  "signals": ["signal1", "signal2", "signal3", "signal4"],
  "sources": ["${website}"]
}

Only return valid JSON, no additional text.`;

    const message = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const responseText =
      message.choices[0]?.message?.content || JSON.stringify(generateMockEnrichment(companyName));

    // Parse JSON response
    let enrichmentData: Partial<EnrichmentData>;
    try {
      enrichmentData = JSON.parse(responseText);
    } catch {
      // If parsing fails, use the parsed content or mock data
      enrichmentData = generateMockEnrichment(companyName);
    }

    const result: EnrichmentData = {
      summary: enrichmentData.summary || `${companyName} is an innovative company in its sector.`,
      whatTheyDo: enrichmentData.whatTheyDo || [
        'Develops innovative solutions',
        'Serves enterprise clients',
        'Offers professional services',
      ],
      keywords: enrichmentData.keywords || [
        'Technology',
        'Innovation',
        'Enterprise',
        'SaaS',
        'Solutions',
        'Services',
      ],
      signals: enrichmentData.signals || ['Growing market', 'Strong leadership', 'Innovation focus'],
      sources: enrichmentData.sources || [website],
      fetchedAt: new Date().toISOString(),
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Enrichment error:', error);
    // Return mock data on error instead of failing
    res.status(200).json(generateMockEnrichment(companyName));
  }
}
