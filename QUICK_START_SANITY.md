# Quick Start: Sanity CMS Setup in 5 Minutes

## You're Already 95% Done!

Your website is ready with Sanity CMS integrated. Follow these 5 simple steps to activate it.

## Step 1: Create a Sanity Project (2 min)

Go to https://sanity.io and create an account (or log in).

1. Click "Create project"
2. Give it a name: "Aurea Global Network"
3. Select "Production" dataset
4. Click "Create"

## Step 2: Get Your Project ID (1 min)

Once in your Sanity project:

1. Go to **Settings** (gear icon, bottom left)
2. Click **API**
3. Copy your **Project ID** (looks like: `abc123xyz`)

## Step 3: Add Environment Variables (1 min)

The environment variables are already requested and ready to be set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = Your Project ID from Step 2
- `NEXT_PUBLIC_SANITY_DATASET` = `production`

**Already set by v0?** Check if they're in your project settings under "Vars".

## Step 4: Visit Your Studio (1 min)

Open http://localhost:3000/studio

Or on production: https://your-domain.com/studio

You'll see your Sanity Studio dashboard!

## Step 5: Create Schemas in Sanity (2 min)

Your website expects 7 document types. Create them in Sanity:

### Create Each Type:
In Sanity dashboard → **Content** → **Schema**

1. **siteSettings** (singleton - only one)
   - Type: Object
   - Fields: founderName, mission, vision, socialLinks

2. **event**
   - Type: Document
   - Fields: title, date, location, description, image

3. **interview**
   - Type: Document
   - Fields: name, title, bio, image, quote, content, soundcloud, publishedAt

4. **chapter**
   - Type: Document
   - Fields: name, location, leader, members, description, image

5. **ambassador**
   - Type: Document
   - Fields: name, title, location, bio, image, social

6. **makeItMakeCentsPost**
   - Type: Document
   - Fields: title, date, category, content, image, author

7. **comingSoonProject**
   - Type: Document
   - Fields: name, description, launchDate, image, email

*Complete schema definitions are in `SANITY_SETUP_COMPLETE.md`*

## Done! 🎉

Your Sanity Studio is now active. Visit `/studio` and start adding content!

### Add Your First Event:
1. Visit `/studio`
2. Click "Events"
3. Click "+"
4. Fill in event details
5. Click "Publish"
6. Check your website - it's live!

## What's Automatically Done

✅ Sanity packages installed
✅ Client configured
✅ API routes set up
✅ Studio embedded
✅ Schemas ready to deploy
✅ Website integrated
✅ Design unchanged
✅ Dev server running

## Website Pages

Your website will auto-update with Sanity content:

- **Home** - Features founder info, programs, testimonials
- **Events** - Lists all events from Sanity
- **Interviews** - All interviews with audio
- **Make It Make Cents** - Financial literacy articles
- **Chapters** - School chapters
- **Ambassadors** - Team members
- **Coming Soon** - Upcoming projects

## Troubleshooting

**Studio shows blank page?**
- Check environment variables are set
- Refresh the page
- Check browser console (F12)

**Can't see "Create" button in studio?**
- Make sure you're logged into Sanity
- Try refreshing

**Website not updating?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Wait 5 seconds for API cache
- Check if document is "Published"

## Next Steps

1. Read `SANITY_EMBEDDED_STUDIO.md` for full documentation
2. Explore your studio at `/studio`
3. Add content
4. Share studio access with team members (in Sanity settings)

## Still Need Help?

- Sanity Docs: https://sanity.io/docs
- This project's schema: See `sanity/documents/` folder
- API endpoints: See `app/api/` folder
- Database integration: See `lib/sanity.queries.ts`

---

**You've got this! Your CMS is ready to use.** ✨
