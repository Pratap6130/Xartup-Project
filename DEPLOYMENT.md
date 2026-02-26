# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Web UI (Easiest)

1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/vc-intelligence.git
   git push -u origin master
   ```

2. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Add Environment Variables:
     - `OPENAI_API_KEY`: `sk-your-key-here`
   - Click "Deploy"

3. **Your app is live!** 🎉
   - Vercel will provide your live URL
   - Auto-deploys on every push to master

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Add environment variables** when prompted

4. **Visit your deployment URL**

## Performance Notes

- **First Deploy**: ~2-3 minutes
- **Cold Start**: API routes respond within 100-500ms
- **Serverless Functions**: Auto-scale based on load
- **Static Pages**: Cached globally (ultra-fast)

## Monitoring

After deployment:
- Check analytics: https://vercel.com/dashboard
- View logs: `vercel logs`
- Monitor errors: Vercel dashboard

## Troubleshooting

### "OPENAI_API_KEY is not defined"
- Go to Vercel Settings → Environment Variables
- Add `OPENAI_API_KEY` without `NEXT_PUBLIC_` prefix

### Enrichment returns mock data
- Verify OpenAI API key is correct
- Check OpenAI account has available credits
- View logs: `vercel logs --tail`

### Slow API responses
- This is normal for first requests (cold start)
- Subsequent requests are cached

## Cost Estimates

- **Vercel**: Free tier covers most use cases (~150K requests/month)
- **OpenAI API**: ~$0.01 per enrichment request (depends on content size)
- **Total**: ~$10-50/month for moderate usage

## Updates

To update your live app:
```bash
git add .
git commit -m "Fix: feature update"
git push origin master
```

Vercel automatically redeploys!
