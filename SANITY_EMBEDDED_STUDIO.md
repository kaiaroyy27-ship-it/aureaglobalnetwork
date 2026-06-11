# Sanity Embedded Studio - Complete Setup Guide

## Overview

Your Aurea Global Network website now has a **fully embedded Sanity Studio** accessible at `/studio` on your website. This allows you to manage all content directly from your app without leaving your domain.

## Quick Access

- **Website**: http://localhost:3000
- **Studio**: http://localhost:3000/studio
- **Production**: https://your-domain.com/studio

## Environment Variables Required

You've already set these environment variables. Keep them safe:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**Getting Your Project ID:**
1. Go to https://sanity.io
2. Create a new project (or use existing)
3. Go to Settings → API → Project ID
4. Copy and paste into environment variables

## 7 Content Types Available

### 1. Site Settings (Global)
**URL**: `/studio/desk/siteSettings`
- Founder name, bio, quote
- Mission statement
- Vision statement
- Social media links
- Footer content

### 2. Events
**URL**: `/studio/desk/event`
- Event title
- Date and time
- Location
- Event type (virtual/in-person/hybrid)
- Description
- Featured image
- Attendee count
- Event link/registration

### 3. Interviews
**URL**: `/studio/desk/interview`
- Interviewee name
- Title/role
- Bio
- Profile image
- Quote
- Full interview content (rich text)
- SoundCloud embed link
- Publication date

### 4. Chapters
**URL**: `/studio/desk/chapter`
- Chapter name
- Location (city, country)
- Leader name
- Number of members
- Chapter description
- Chapter image
- Contact email
- Member list

### 5. Ambassadors
**URL**: `/studio/desk/ambassador`
- Ambassador name
- Title
- Location
- Bio
- Profile photo
- Social links (Twitter, Instagram, LinkedIn)
- Featured

### 6. Make It Make Cents Posts
**URL**: `/studio/desk/makeItMakeCentsPost`
- Article title
- Publication date
- Category
- Article content (rich text with images)
- Featured image
- Author
- Reading time

### 7. Coming Soon Projects
**URL**: `/studio/desk/comingSoonProject`
- Project name
- Description
- Launch date (optional)
- Project image
- Email for updates
- Category

## How to Use the Studio

### Step 1: Access the Studio
Navigate to `/studio` on your website. You'll see the Sanity Studio dashboard with all content types listed.

### Step 2: Add Content
1. Click on any content type (e.g., "Events")
2. Click the "+" button to create new content
3. Fill in the fields
4. Upload images if needed
5. Click "Publish" to make live

### Step 3: Edit Content
1. Find the document you want to edit
2. Click to open it
3. Make changes
4. Click "Publish" to save

### Step 4: Preview Changes
All changes are saved as drafts. Click "Publish" to make them live on your website.

## Rich Text Editor

For content fields like "Interview Content" and "Article Content":
- Format text (bold, italic, underline)
- Add headers and paragraphs
- Create lists (bullet and numbered)
- Add links
- Embed images
- Add code blocks

## Image Uploads

All images are uploaded to Sanity's CDN:
1. Click the image upload field
2. Choose an image from your computer
3. Sanity automatically optimizes it
4. Images are cached and served globally

## Publishing Workflow

**Drafts**: Saved but not visible on website
**Published**: Visible to everyone

1. Make changes in the Studio
2. Click "Publish" when ready
3. Changes appear on your website immediately (with cache)
4. No rebuild needed!

## Real-time Updates

Because the website fetches content from Sanity API, updates are instant:
- Publish content → Website updates immediately
- No deployment needed
- No cache delays (unless configured)

## Team Management

You can invite team members to edit content:
1. In Sanity dashboard (sanity.io)
2. Go to Settings → Members
3. Invite team members by email
4. Assign roles (Editor, Admin, etc.)

They can then edit from the studio.

## API Endpoints

The website has 6 API routes that fetch from Sanity:

- `/api/settings` - Site settings
- `/api/events` - All events
- `/api/interviews` - All interviews
- `/api/chapters` - All chapters
- `/api/ambassadors` - All ambassadors
- `/api/make-it-make-cents` - All MIMC posts

These endpoints power your website pages.

## Fallback System

If Sanity is unreachable:
- Website displays fallback mock data
- Nothing breaks
- Users see the website normally
- This ensures reliability

## Database Structure

All documents have:
- **_id**: Unique identifier (auto-generated)
- **_type**: Document type
- **_createdAt**: Creation timestamp
- **_updatedAt**: Last update timestamp
- **publishedAt**: When published

## Queries (GROQ)

The website uses GROQ (Graph-Relational Object Queries) to fetch data:

```groq
*[_type == "event"] | order(date desc)
*[_type == "interview"] | order(publishedAt desc)
```

These queries are in `lib/sanity.queries.ts`.

## Troubleshooting

### Studio shows blank page
- Check environment variables are set
- Refresh the page
- Check browser console for errors

### Images not uploading
- Check file size (under 100MB)
- Try PNG or JPG format
- Check internet connection

### Content not appearing on website
- Check if document is published (not just drafted)
- Wait a few seconds for cache
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Need to reset data
- Go to Sanity dashboard
- Settings → Datasets → Delete
- This clears all content (careful!)

## Security

The embedded studio uses Sanity's authentication:
- Secure connection (HTTPS on production)
- Token-based API access
- Only authorized users can edit
- All changes are logged in Sanity

## Production Deployment

When deploying to production:
1. Ensure environment variables are set on your host
2. Studio will be available at `https://your-domain.com/studio`
3. Images will be served from Sanity's global CDN
4. No extra setup needed!

## Next Steps

1. Create your Sanity project (if not done): https://sanity.io
2. Get your Project ID from Sanity Settings
3. Visit `/studio` on your website
4. Start adding content!

## Resources

- Sanity Documentation: https://sanity.io/docs
- GROQ Query Language: https://sanity.io/docs/groq
- Image Optimization: https://sanity.io/docs/image-pipeline
- Rich Text Editor: https://sanity.io/docs/portable-text

## Support

- Sanity Help: https://sanity.io/help
- View dev console for error messages
- Check `.next/dev/logs/` for Next.js logs

---

**Your content management system is ready. Start editing at `/studio`!**
