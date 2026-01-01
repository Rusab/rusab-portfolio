# Rusab Sarmun - ML Researcher Portfolio

A beautiful, modern portfolio website for showcasing machine learning research, publications, robotics projects, and achievements.

## Features

- **Publications Showcase**: Display all your research papers with filtering, sorting, and search functionality
- **Research Interests**: Highlight your areas of expertise with beautiful cards
- **Robotics Projects**: Gallery section for your robotics work
- **Achievements**: Showcase awards, competitions, and certificates
- **Dark/Light Mode**: Toggle between themes
- **Fully Responsive**: Works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd ml-researcher-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Publications

Your publications are already loaded from Google Scholar data in `data/publications.ts`.

**Auto-updating from Google Scholar:**
Unfortunately, there's no official Google Scholar API. However, you have several options:

#### Option A: Use Scholarly (Python Library) - Recommended
```python
# Install: pip install scholarly
from scholarly import scholarly

author = scholarly.search_author_id('qXl9BcAAAAAJ')
author = scholarly.fill(author)

# Export to JSON and manually update data/publications.ts periodically
```

#### Option B: Use SerpAPI (Paid Service)
- Sign up at [SerpAPI](https://serpapi.com/)
- They provide Google Scholar scraping with an API
- Cost: ~$50/month for regular updates

#### Option C: Manual Updates
- Update `data/publications.ts` manually when you publish new papers
- This is the simplest and most reliable approach

#### Option D: Build Your Own Scraper
- Create a Node.js script to scrape your Google Scholar page
- Run it periodically via cron job
- Note: Google may block automated requests

**For now**: Your publications are manually added and can be updated by editing `data/publications.ts`

### 2. Personal Information

Edit these files to update your information:

**Hero Section** (`components/Hero.tsx`):
- Update bio/tagline
- Replace the placeholder initials with your photo (line 32-36)

**Contact** (`components/Contact.tsx`):
- Already has your email and location
- All social links are configured

### 3. Robotics Projects

Edit `components/Robotics.tsx` to update:
- Project titles and descriptions
- Technologies used
- Add actual images by replacing placeholders

To add images:
1. Create a `public/images/robotics/` folder
2. Add your robot photos
3. Update the `image` property in the projects array

### 4. Achievements & Certificates

Edit `components/Achievements.tsx`:
- Replace placeholder achievements with your actual awards
- Update certificate information
- Add dates and competition details

### 5. Research Interests

Edit `components/ResearchInterests.tsx` to:
- Modify research interest cards
- Update technical keywords
- Change colors and icons

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Other Options
- **Netlify**: Similar process to Vercel
- **AWS Amplify**: Connect your GitHub repo
- **GitHub Pages**: Requires static export

## Project Structure

```
ml-researcher-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header with navigation
│   ├── Hero.tsx           # Landing section
│   ├── Publications.tsx   # Publications showcase
│   ├── ResearchInterests.tsx
│   ├── Robotics.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── publications.ts    # Publications data
└── public/
    └── images/           # Your images (create this folder)
```

## Adding Images

1. Create folders in `public/`:
```
public/
├── images/
│   ├── profile/
│   │   └── photo.jpg
│   ├── robotics/
│   │   ├── robot1.jpg
│   │   └── robot2.jpg
│   └── certificates/
│       └── cert1.jpg
```

2. Update component imports:
```tsx
import Image from 'next/image';

<Image
  src="/images/profile/photo.jpg"
  alt="Rusab Sarmun"
  width={160}
  height={160}
/>
```

## Tips for Best Results

1. **High-Quality Images**: Use clear, professional photos of your robots and projects
2. **Keep Publications Updated**: Set a reminder to update your publications quarterly
3. **SEO**: Update metadata in `app/layout.tsx` as your work evolves
4. **Performance**: Optimize images using Next.js Image component
5. **Analytics**: Add Google Analytics or Vercel Analytics to track visitors

## Future Enhancements

Potential additions you might want to consider:

- [ ] Blog section for research notes
- [ ] Interactive citation graph
- [ ] Publication PDF downloads
- [ ] Video demos of robotics projects
- [ ] Automated Google Scholar updates via API
- [ ] Newsletter signup
- [ ] Multi-language support

## Support

For issues with the website:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Clear `.next` cache: `rm -rf .next`
4. Rebuild: `npm run build`

## License

This project is open source and available for personal use.

---

Built with ❤️ by Rusab Sarmun
