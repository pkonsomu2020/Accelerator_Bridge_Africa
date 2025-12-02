# Accelerator Bridge - Production Backend API

Production-ready backend API for The Accelerator Bridge forms with Supabase database and deployment to Render.com.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start server
npm start

# Or with auto-reload
npm run dev
```

Server runs on: http://localhost:5000

---

## 🌐 Production Deployment

**Live API:** https://accelerator-bridge-api.onrender.com

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete deployment instructions.

---

## 📊 Tech Stack

- **Runtime:** Node.js + Express
- **Database:** Supabase (PostgreSQL)
- **Email:** Gmail SMTP (Nodemailer)
- **File Upload:** Multer (200MB limit)
- **Hosting:** Render.com
- **Storage:** Local filesystem (uploads/)

---

## 🗄️ Database

**Provider:** Supabase
**Tables:**
- `contact_forms` - Contact form submissions
- `partnership_forms` - Partnership form submissions

**Schema:** See `database/supabase-schema.sql`

---

## 📧 Email Configuration

**SMTP:** Gmail
**From:** community@secretstartups.org
**Features:**
- Admin notifications
- User confirmations
- HTML templates
- File attachments (partnerships)

---

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Contact Form
```
POST /api/contact
Body: { name, email, description }
```

### Partnership Form
```
POST /api/partnership
Body: FormData with organizationName, email, etc. + logo file
```

### Admin Endpoints
```
GET /api/contact - Get all contact submissions
GET /api/partnership - Get all partnership submissions
```

---

## 🔧 Environment Variables

Required in `.env` or Render dashboard:

```env
NODE_ENV=production
PORT=5000
SUPABASE_URL=https://hsrmybuxqximjylurvzz.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=community@secretstartups.org
SMTP_PASS=your_app_password
EMAIL_FROM=community@secretstartups.org
EMAIL_TO=community@secretstartups.org
FRONTEND_URL=https://acceleratorbridge.skillyme.africa
```

---

## 📁 Project Structure

```
PRODUCTION_BACKEND/
├── config/
│   ├── supabase.js       # Supabase client
│   └── email.js          # SMTP configuration
├── controllers/
│   ├── contactController.js
│   └── partnershipController.js
├── database/
│   └── supabase-schema.sql
├── middleware/
│   └── upload.js         # File upload (200MB)
├── routes/
│   ├── contactRoutes.js
│   └── partnershipRoutes.js
├── uploads/              # Uploaded files
├── .env                  # Environment variables
├── server.js             # Main server
├── package.json
├── render.yaml           # Render.com config
└── DEPLOYMENT_GUIDE.md
```

---

## 🧪 Testing

### Test Locally
```bash
# Health check
curl http://localhost:5000/api/health

# Contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","description":"Test"}'
```

### Test Production
```bash
# Health check
curl https://accelerator-bridge-api.onrender.com/api/health

# Contact form
curl -X POST https://accelerator-bridge-api.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","description":"Test"}'
```

---

## 🔒 Security

- ✅ Environment variables for secrets
- ✅ CORS configured for frontend only
- ✅ Supabase RLS policies enabled
- ✅ Input validation
- ✅ File type validation
- ✅ File size limits (200MB)
- ✅ HTTPS only (Render provides SSL)

---

## 📈 Monitoring

**Render Dashboard:** https://dashboard.render.com
- View logs
- Monitor uptime
- Check deployments

**Supabase Dashboard:** https://supabase.com/dashboard
- View data
- Check API usage
- Monitor performance

---

## 🐛 Troubleshooting

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#troubleshooting)

---

## 📞 Support

**Email:** community@secretstartups.org
**Phone:** +254 111 566445

---

## 📄 License

© 2025 SkillME X SecretStartups - The Accelerator Bridge

---

**Status:** ✅ Production Ready
**Version:** 1.0.0
**Last Updated:** December 2, 2025
