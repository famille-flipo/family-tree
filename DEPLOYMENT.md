# Deployment Guide

## Pre-Deployment Checklist

- [ ] Encrypted your GEDCOM file using `encrypt.html`
- [ ] Pasted encrypted data into `app.js` (line 4: `ENCRYPTED_GEDCOM_DATA`)
- [ ] Tested locally with correct password
- [ ] Tested locally with wrong password (should show error)
- [ ] Removed or excluded sensitive files (test.ged, original.html)

## Files to Deploy

**Required files (deploy these):**
```
✅ index.html
✅ app.js (with your encrypted data)
✅ crypto.js
✅ styles.css
```

**Do NOT deploy:**
```
❌ encrypt.html (keep this local - it's your encryption tool)
❌ test.ged (sample data)
❌ original.html (backup of original source)
❌ DEPLOYMENT.md, USAGE.md (optional documentation)
```

**Optional:**
```
⭕ README.md (if you want public documentation)
```

---

## Option 1: GitHub Pages (Recommended)

### Step 1: Create GitHub Repository

```bash
cd /Users/edouard.mulliez/Documents/perso/code/flipo_tree/gedcom-explorer-fork

# Initialize git (if not already done)
git init

# Add only the files you want to deploy
git add index.html app.js crypto.js styles.css README.md

# Create initial commit
git commit -m "Initial commit: GEDCOM Explorer with password protection"

# Create main branch
git branch -M main
```

### Step 2: Push to GitHub

```bash
# Create a new repository on GitHub first (e.g., "family-tree")
# Then connect it:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

### Step 4: Test Deployment

1. Open the URL in a private/incognito window
2. Password prompt should appear
3. Enter your password
4. Family tree should load

---

## Option 2: Netlify

### Method A: Netlify Drop (Easiest)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Create a temporary deployment folder:
   ```bash
   mkdir deploy-temp
   cp index.html app.js crypto.js styles.css deploy-temp/
   ```
3. Drag the `deploy-temp` folder to Netlify Drop
4. Get your URL: `https://random-name.netlify.app`

### Method B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /Users/edouard.mulliez/Documents/perso/code/flipo_tree/gedcom-explorer-fork
netlify deploy --prod

# Follow the prompts:
# - Create & configure new site: Yes
# - Publish directory: . (current directory)

# You'll get a URL like: https://your-site-name.netlify.app
```

### Method C: Netlify Git Integration

1. Push your code to GitHub (see GitHub Pages steps above)
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your GitHub repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or use `/`)
5. Click **Deploy site**

---

## Option 3: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /Users/edouard.mulliez/Documents/perso/code/flipo_tree/gedcom-explorer-fork
vercel

# Follow prompts, then you'll get URL like:
# https://your-project.vercel.app
```

---

## Option 4: Cloudflare Pages

1. Push code to GitHub (see GitHub Pages steps)
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: (leave empty)
6. Click **Save and Deploy**

---

## Custom Domain (Optional)

### For GitHub Pages:

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `familytree.yourdomain.com`
3. Add DNS record in your domain provider:
   ```
   Type: CNAME
   Name: familytree
   Value: YOUR-USERNAME.github.io
   ```

### For Netlify/Vercel/Cloudflare:

1. Go to site settings → Domain settings
2. Click "Add custom domain"
3. Follow DNS setup instructions provided

---

## Security Notes for Deployment

### ✅ Safe to Deploy:
- Encrypted GEDCOM data in `app.js` (it's encrypted!)
- All HTML/CSS/JS files
- README if you want

### ⚠️ Never Deploy:
- `encrypt.html` (this is your private encryption tool)
- Original unencrypted `.ged` files
- Any files with passwords or sensitive notes

### 🔒 Best Practices:
1. **Use HTTPS**: All modern hosts provide this automatically
2. **Private Repository**: Consider making GitHub repo private
3. **Environment Variables**: If using build systems, never put password in env vars
4. **Git History**: Never commit real GEDCOM files, even temporarily
   ```bash
   # If you accidentally committed sensitive data:
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch test.ged" \
     --prune-empty --tag-name-filter cat -- --all
   ```

---

## Updating Your Deployment

### To Change the GEDCOM Data:

1. Encrypt new file with `encrypt.html`
2. Update `ENCRYPTED_GEDCOM_DATA` in `app.js`
3. Commit and push:
   ```bash
   git add app.js
   git commit -m "Update family tree data"
   git push
   ```
4. GitHub Pages/Netlify/Vercel will auto-deploy

### To Change Password:

1. Re-encrypt GEDCOM with new password
2. Update `app.js`
3. Deploy as above
4. **Important**: Notify all recipients of password change!

---

## Troubleshooting Deployment

### Site loads but shows file upload screen:
- Check that `ENCRYPTED_GEDCOM_DATA` in `app.js` is not empty
- Verify you deployed the updated `app.js`
- Clear browser cache or test in incognito mode

### Password prompt doesn't appear:
- Check browser console (F12) for JavaScript errors
- Verify `crypto.js` is being loaded (check Network tab)
- Ensure `app.js` is loaded after `crypto.js`

### "Incorrect password" even with correct password:
- Ensure you copied the complete encrypted string (no truncation)
- Check for extra spaces or line breaks
- Try re-encrypting the file

### Deployment fails:
- Ensure you're not exceeding file size limits (usually 100MB total)
- Check that all required files are present
- Review build logs for specific errors

### SSL/HTTPS errors:
- All modern static hosts provide HTTPS automatically
- If using custom domain, ensure DNS is properly configured
- Wait for SSL certificate provisioning (can take 24 hours)

---

## Testing Your Deployment

### Checklist:

1. **Open in incognito/private window** (tests fresh visitor experience)
2. **Password prompt appears** immediately
3. **Wrong password** shows error message
4. **Correct password** loads the tree
5. **All features work**:
   - [ ] Navigate between people
   - [ ] Search functionality
   - [ ] Favorites
   - [ ] Calendar view
   - [ ] Timeline
   - [ ] Dark mode toggle
6. **Mobile responsive** (test on phone)
7. **No console errors** (F12 → Console tab)
8. **No network calls** to external APIs (except fonts)

---

## Sharing Your Site

### What to Share:

✅ **Share separately:**
1. Send URL via email: `https://yoursite.github.io/family-tree/`
2. Send password via phone/SMS: "The password is: MySecurePass2024"

❌ **Never:**
- Send URL and password in the same message
- Post password in public places
- Share password via unencrypted channels

### Example Message Templates:

**Email (URL only):**
```
Subject: Family Tree Viewer

Hi [Name],

I've created an interactive family tree viewer. You can access it here:
https://yoursite.github.io/family-tree/

I'll send you the password separately via text message.

Best,
[Your Name]
```

**SMS (Password only):**
```
Family tree password: MySecurePass2024
```

---

## Monitoring & Maintenance

### GitHub Pages Analytics:
- Free tier doesn't include analytics
- Consider adding Google Analytics if needed
- Or use Cloudflare (free analytics included)

### Updating the Site:
```bash
# Make changes to app.js or other files
git add .
git commit -m "Description of changes"
git push

# GitHub Pages will automatically rebuild (takes 1-2 minutes)
```

### Backup:
```bash
# Always keep a backup of:
# 1. Original unencrypted .ged file
# 2. The password you used
# 3. The encrypted string (copy from app.js)

# Store these securely (password manager, encrypted drive, etc.)
```

---

## Cost Comparison

| Platform | Free Tier | Bandwidth | Custom Domain | HTTPS |
|----------|-----------|-----------|---------------|-------|
| GitHub Pages | ✅ Unlimited | 100GB/month | ✅ Free | ✅ Auto |
| Netlify | ✅ Generous | 100GB/month | ✅ Free | ✅ Auto |
| Vercel | ✅ Good | 100GB/month | ✅ Free | ✅ Auto |
| Cloudflare | ✅ Unlimited | Unlimited | ✅ Free | ✅ Auto |

**Recommendation**: GitHub Pages for simplicity, Cloudflare for unlimited bandwidth

---

## Need Help?

1. Check browser console for errors (F12)
2. Review the README.md and USAGE.md files
3. Test locally first: `open index.html`
4. Verify files deployed correctly (check URLs directly)
5. Clear browser cache and test in incognito mode

**Common issues and solutions are in the Troubleshooting section above.**
