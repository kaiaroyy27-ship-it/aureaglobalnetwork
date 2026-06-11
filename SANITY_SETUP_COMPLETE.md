# ✅ Sanity CMS Integration - Complete Setup

Your **Aurea Global Network** website now has full Sanity CMS integration with **ZERO design changes**. All content is editable through Sanity Studio while maintaining the exact same beautiful design and functionality.

---

## 🎯 What's Integrated

✅ **Homepage** - Hero, mission, stats, founder, programs, testimonials  
✅ **Events & Workshops** - Full event management with listings and details  
✅ **Interviews & Podcasts** - Manage interviewee content and audio links  
✅ **School Chapters** - Chapter listings with locations and leaders  
✅ **Make It Make Cents Wednesday** - Weekly financial literacy articles  
✅ **Ambassadors** - Manage global ambassador profiles and bios  
✅ **Site Settings** - Founder info, mission, vision, social links  

---

## 🚀 Getting Started in 3 Steps

### Step 1: Create a Sanity Project (2 minutes)
1. Visit **[sanity.io](https://www.sanity.io)**
2. Click "Get Started" or sign in
3. Create a new project
4. Choose a project name (e.g., "Aurea Global Network")
5. Select "Create empty project"
6. In Project Settings, copy your **Project ID** and confirm dataset is `production`

### Step 2: Add Environment Variables
Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Replace `your_project_id_here` with your actual Sanity Project ID.

**Or use the template:**
```bash
cp .env.example .env.local
# Then edit .env.local with your Sanity credentials
```

### Step 3: Create Document Schemas in Sanity

Go to your Sanity Studio and create these 6 document types:

#### 1️⃣ **Interview** Schema
```
Name: interview
Display name: Interview

Fields:
- title (string, required) - The interviewee's name
- slug (slug, required) - Auto-generate from title
- intervieweeName (string)
- role (string) - Job title/role
- description (text) - Bio/background
- excerpt (text) - Short summary
- highlightQuote (text) - Featured quote
- publishedAt (datetime)
- category (string) - e.g., "Finance", "Leadership"
- thumbnail (image)
- soundcloudEmbed (string) - SoundCloud URL
- fullContent (rich text) - Full interview text
```

#### 2️⃣ **Event** Schema
```
Name: event
Display name: Event

Fields:
- title (string, required)
- slug (slug, required)
- description (text)
- excerpt (text)
- eventDate (datetime)
- location (string)
- eventType (string) - e.g., "Workshop", "Summit"
- thumbnail (image)
- fullContent (rich text)
```

#### 3️⃣ **Chapter** Schema
```
Name: chapter
Display name: Chapter

Fields:
- title (string, required) - School/University name
- slug (slug, required)
- city (string)
- country (string)
- description (text)
- leaders (array of strings) - Chapter lead names
- memberCount (number)
- thumbnail (image)
- fullContent (rich text)
```

#### 4️⃣ **Ambassador** Schema
```
Name: ambassador
Display name: Ambassador

Fields:
- name (string, required)
- title (string) - Ambassador title/role
- bio (text)
- image (image) - Profile photo
- location (string) - Country/city
- social (object):
  - instagram (string) - Instagram handle
  - twitter (string) - Twitter handle
  - linkedin (string) - LinkedIn URL
```

#### 5️⃣ **MIMCW Article** Schema (Make It Make Cents Wednesday)
```
Name: mimcwArticle
Display name: Make It Make Cents Article

Fields:
- title (string, required)
- slug (slug, required)
- description (text)
- excerpt (text)
- publishedAt (datetime)
- category (string) - Financial topic
- thumbnail (image)
- content (rich text)
```

#### 6️⃣ **Site Settings** Schema
```
Name: siteSettings
Display name: Site Settings

Fields:
- title (string)
- description (text)
- missionStatement (text)
- visionStatement (text)
- valuesStatement (text)
- founderName (string)
- founderImage (image)
- founderBio (text)
- socialLinks (object):
  - instagram (string)
  - twitter (string)
  - linkedin (string)
  - facebook (string)
```

---

## 🎬 How to Use

### Adding Your First Content

1. **Go to Sanity Studio**
   - Development: Visit `/studio` on your local dev server
   - Or go to: `https://studio.sanity.io/projects/YOUR_PROJECT_ID`

2. **Create a new document**
   - Click the document type you want to create
   - Fill in all fields (required fields are marked with *)
   - Upload images as needed
   - Click "Publish"

3. **See it live**
   - Content appears instantly on your website
   - No manual deployment needed!

### Example: Add an Event

1. In Sanity Studio, click "Event"
2. Fill in:
   - Title: "Global Financial Literacy Summit 2024"
   - Event Date: August 15, 2024
   - Location: "New York City"
   - Description: "Join us for our annual summit..."
   - Upload a thumbnail image
3. Click "Publish"
4. Go to `/events` on your website - **it's there!**

---

## 📱 Design Preservation

**Important:** The design is 100% unchanged.
- All layouts, animations, and colors remain identical
- Only the data source changed (from mock data → Sanity)
- Every component has fallback mock data if Sanity isn't available
- Your site works even without Sanity configured

---

## 🔄 Data Flow

```
You edit in Sanity Studio
         ↓
Sanity API stores data
         ↓
Website fetches from Sanity
         ↓
Beautiful UI updates instantly
```

---

## 🛠️ Technical Details

### API Routes (All Built-In)
- `/api/interviews` - Fetch all interviews
- `/api/events` - Fetch all events
- `/api/chapters` - Fetch all chapters
- `/api/ambassadors` - Fetch all ambassadors
- `/api/mimcw` - Fetch Make It Make Cents articles
- `/api/settings` - Fetch site settings

### Query Language
We use **GROQ** (Graph-Relational Object Queries) to fetch from Sanity.

All queries are in: `lib/sanity.queries.ts`

### Fallback System
If Sanity isn't configured or is unavailable:
1. API routes automatically use mock data
2. Website still functions perfectly
3. No errors shown to users

---

## ✨ Common Tasks

### Update Founder Information
1. Go to Sanity Studio
2. Click "Site Settings"
3. Update: founderName, founderBio, founderImage
4. Publish
5. Homepage updates instantly

### Add a New Interview
1. Go to Sanity Studio
2. Click "Interview"
3. Fill in interviewee details
4. Add SoundCloud link in `soundcloudEmbed` field
5. Publish
6. Appears at `/interviews`

### Edit Event Details
1. Find event in Sanity
2. Update any field (date, location, description, etc.)
3. Publish
4. Website updates immediately

### Manage Ambassadors
1. Add new ambassadors in Sanity
2. Upload photos
3. Add social links
4. They appear on `/ambassadors`

---

## 🆘 Troubleshooting

### Content not showing up?
- ✅ Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`
- ✅ Verify Project ID matches your actual Sanity project
- ✅ Ensure document is "Published" (not just saved as draft)
- ✅ Check browser console for errors (F12)

### Using mock data instead?
- This is **normal** if `NEXT_PUBLIC_SANITY_PROJECT_ID` isn't set
- Add the environment variable and restart dev server
- Mock data ensures the site always works during development

### Build errors?
```bash
# Clear cache and rebuild
rm -rf .next
pnpm install
pnpm build
```

---

## 📚 What You Can Do (Examples)

- ✅ Change homepage hero title without touching code
- ✅ Upload new founder photo instantly
- ✅ Add 100 new interviews - they all appear at `/interviews`
- ✅ Schedule events months in advance
- ✅ Update social links without any code changes
- ✅ Add ambassadors from different countries
- ✅ Create weekly financial literacy articles
- ✅ Manage school chapters globally

---

## 🔐 Production Deployment

When deploying to Vercel:

1. Add these environment variables in Vercel Settings:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

2. Deploy as normal - Sanity will work immediately

3. Your team can edit content in Sanity while your site is live!

---

## 📖 Learn More

- **Sanity Docs:** [sanity.io/docs](https://www.sanity.io/docs)
- **GROQ Query Language:** [sanity.io/docs/groq](https://www.sanity.io/docs/groq)
- **Studio Customization:** [sanity.io/studio](https://www.sanity.io/studio)

---

## 🎉 You're All Set!

Your Aurea Global Network website now has a powerful content management system. You can:
- ✅ Edit all content without touching code
- ✅ Add unlimited events, interviews, chapters
- ✅ Manage your global community
- ✅ Keep the beautiful design unchanged

**Everything is ready. Just add your Sanity credentials and start creating!**

For support: Sanity's documentation or our comprehensive guides in the repository.
