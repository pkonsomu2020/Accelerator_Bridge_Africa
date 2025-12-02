# Production Backend Deployment Guide
## Deploy to Render.com with Supabase

---

## 📋 Prerequisites

1. **Supabase Account** - https://supabase.com
2. **Render.com Account** - https://render.com
3. **GitHub Account** - To push code

---

## Step 1: Setup Supabase Database

### 1.1 Create Tables

1. Go to your Supabase project: https://supabase.com/dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the contents of `database/supabase-schema.sql`
5. Click "Run" to execute the SQL

**Expected Result:**
```
✅ contact_forms table created
✅ partnership_forms table created
✅ Indexes created
✅ RLS policies created
```

### 1.2 Verify Tables

1. Click on "Table Editor" in the left sidebar
2. You should see:
   - `contact_forms`
   - `partnership_forms`

---

## Step 2: Push Code to GitHub

### 2.1 Initialize Git Repository

```bash
cd PRODUCTION_BACKEND
git init
git add .
git commit -m "Initial commit - Production backend with Supabase"
```

### 2.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `accelerator-bridge-backend`
3. Make it **Private**
4. Click "Create repository"

### 2.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/accelerator-bridge-backend.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Render.com

### 3.1 Create New Web Service

1. Go to https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select `accelerator-bridge-backend`

### 3.2 Configure Service

**Basic Settings:**
- **Name:** `accelerator-bridge-api`
- **Region:** Oregon (US West)
- **Branch:** `main`
- **Root Directory:** Leave empty
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Plan:** Free

### 3.3 Add Environment Variables

Click "Advanced" → "Add Environment Variable" and add these:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `SUPABASE_URL` | `https://hsrmybuxqximjylurvzz.supabase.co` |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your anon key) |
| `SUPABASE_SERVICE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your service key) |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_SECURE` | `false` |
| `SMTP_USER` | `community@secretstartups.org` |
| `SMTP_PASS` | `hjyi lwct nueb tsar` |
| `EMAIL_FROM` | `community@secretstartups.org` |
| `EMAIL_TO` | `community@secretstartups.org` |
| `FRONTEND_URL` | `https://acceleratorbridge.skillyme.africa` |

### 3.4 Deploy

1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. Your API will be available at: `https://accelerator-bridge-api.onrender.com`

---

## Step 4: Test Production API

### 4.1 Health Check

Open in browser:
```
https://accelerator-bridge-api.onrender.com/api/health
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "environment": "production",
  "timestamp": "2025-12-02T..."
}
```

### 4.2 Test Contact Form

```bash
curl -X POST https://accelerator-bridge-api.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "description": "Testing production API"
  }'
```

---

## Step 5: Update Frontend

### 5.1 Update API URL

In your frontend project, update the API URL:

**File:** `src/services/api.ts` or where API calls are made

```typescript
// OLD (Development)
const API_BASE_URL = 'http://localhost:5000/api';

// NEW (Production)
const API_BASE_URL = 'https://accelerator-bridge-api.onrender.com/api';

// OR use environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://accelerator-bridge-api.onrender.com/api';
```

### 5.2 Update Contact Page

```typescript
// In src/pages/Contact.tsx
const response = await fetch('https://accelerator-bridge-api.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### 5.3 Update Partnership Page

```typescript
// In src/pages/Partnerships.tsx
const response = await fetch('https://accelerator-bridge-api.onrender.com/api/partnership', {
  method: 'POST',
  body: formDataToSend,
});
```

---

## Step 6: Verify Everything Works

### 6.1 Test Contact Form
1. Go to: https://acceleratorbridge.skillyme.africa/contact
2. Fill and submit form
3. Check email: community@secretstartups.org
4. Verify in Supabase: Table Editor → contact_forms

### 6.2 Test Partnership Form
1. Go to: https://acceleratorbridge.skillyme.africa/partnerships
2. Fill and submit form with logo
3. Check email: community@secretstartups.org
4. Verify in Supabase: Table Editor → partnership_forms

---

## 📊 Monitoring

### Render.com Dashboard
- View logs: https://dashboard.render.com
- Monitor uptime and performance
- Check deployment history

### Supabase Dashboard
- View data: Table Editor
- Check logs: Logs section
- Monitor API usage: Settings → API

---

## 🔧 Troubleshooting

### Issue: "Supabase connection failed"
**Solution:**
- Verify SUPABASE_URL and keys in Render environment variables
- Check Supabase project is active
- Run SQL schema again

### Issue: "Email not sending"
**Solution:**
- Verify SMTP credentials in Render
- Check Gmail App Password is correct
- Test email configuration

### Issue: "CORS error"
**Solution:**
- Verify FRONTEND_URL in Render matches your actual frontend URL
- Check CORS settings in server.js

### Issue: "File upload fails"
**Solution:**
- Render free tier has limited storage
- Consider using Supabase Storage for files
- Or use AWS S3/Cloudinary

---

## 🚀 Production Checklist

- [ ] Supabase tables created
- [ ] Code pushed to GitHub
- [ ] Render.com service created
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Health check working
- [ ] Contact form tested
- [ ] Partnership form tested
- [ ] Emails received
- [ ] Data in Supabase verified
- [ ] Frontend updated with production API URL
- [ ] Frontend deployed

---

## 📝 Important URLs

**Production API:** https://accelerator-bridge-api.onrender.com
**Frontend:** https://acceleratorbridge.skillyme.africa
**Supabase Dashboard:** https://supabase.com/dashboard
**Render Dashboard:** https://dashboard.render.com

---

## 🔒 Security Notes

1. **Never commit .env file** - Already in .gitignore
2. **Use environment variables** - All secrets in Render dashboard
3. **Enable RLS in Supabase** - Already configured
4. **Use HTTPS only** - Render provides SSL automatically
5. **Monitor logs regularly** - Check for suspicious activity

---

## 💰 Cost Estimate

**Free Tier:**
- Render.com: Free (with limitations)
- Supabase: Free (500MB database, 1GB file storage)
- Gmail SMTP: Free

**Limitations:**
- Render free tier sleeps after 15 min inactivity
- First request after sleep takes ~30 seconds
- 750 hours/month free

**Upgrade Options:**
- Render Starter: $7/month (no sleep)
- Supabase Pro: $25/month (8GB database)

---

**Last Updated:** December 2, 2025
**Status:** Ready for Production
**Version:** 1.0.0
