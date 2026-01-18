# Quick Usage Guide

## For Testing (Right Now)

### Test the Encryption Utility
1. Open `encrypt.html` in your browser
2. Upload `test.ged` (sample file included)
3. Enter password: `test123`
4. Click "Encrypt GEDCOM"
5. You should see encrypted output

### Test the Viewer (Manual Upload Mode)
Since `ENCRYPTED_GEDCOM_DATA` is empty by default:
1. Open `index.html` in your browser
2. Click "Open File"
3. Upload `test.ged`
4. The family tree should load showing the Smith family

## For Production Use

### Workflow
```
Your GEDCOM File
    ↓
encrypt.html (+ password)
    ↓
Encrypted String
    ↓
Paste into app.js
    ↓
Deploy to hosting
    ↓
Share URL + password (separately!)
```

### Step-by-Step

#### 1. Encrypt Your GEDCOM
```bash
# Open encrypt.html in browser
open encrypt.html

# Upload your real .ged file
# Enter strong password
# Copy encrypted output
```

#### 2. Embed Encrypted Data
```javascript
// In app.js, replace:
const ENCRYPTED_GEDCOM_DATA = "";

// With:
const ENCRYPTED_GEDCOM_DATA = "your-very-long-encrypted-string-here";
```

#### 3. Deploy
```bash
# Option A: GitHub Pages
git init
git add .
git commit -m "Family tree viewer"
git push

# Option B: Netlify
# Just drag folder to netlify.com/drop

# Option C: Local testing
# Open index.html in browser (password prompt should appear)
```

#### 4. Share
- **URL**: Send via email
- **Password**: Send via phone/SMS/separate channel
- **Never together**: Don't send both in same message!

## Testing the Password Protection

1. Add some encrypted data to app.js:
```javascript
const ENCRYPTED_GEDCOM_DATA = "paste-encrypted-string-here";
```

2. Open index.html:
   - ✅ Should see password prompt
   - ✅ Enter correct password → tree loads
   - ✅ Enter wrong password → error message

3. If password prompt doesn't appear:
   - Check that encrypted string is not empty
   - Open browser console (F12) for errors

## Common Tasks

### Change the Embedded Data
1. Encrypt new GEDCOM file with encrypt.html
2. Replace `ENCRYPTED_GEDCOM_DATA` in app.js
3. Re-deploy

### Switch Back to Manual Upload Mode
1. Empty the `ENCRYPTED_GEDCOM_DATA` in app.js:
```javascript
const ENCRYPTED_GEDCOM_DATA = "";
```
2. Save and reload

### Change Password
1. Re-encrypt GEDCOM with new password
2. Update app.js with new encrypted data
3. Re-deploy
4. Notify recipients of new password

## Security Checklist

- [ ] Use strong password (12+ characters, mixed case, numbers, symbols)
- [ ] Never commit real GEDCOM data to public repositories
- [ ] Share password separately from URL
- [ ] Test with wrong password to verify protection works
- [ ] Use HTTPS hosting (GitHub Pages, Netlify provide this)
- [ ] Periodically change password and re-encrypt

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No password prompt | Check ENCRYPTED_GEDCOM_DATA is not empty |
| "Incorrect password" | Verify password, check for typos |
| Tree doesn't load | Check browser console (F12) for errors |
| Encryption fails | Ensure .ged file is valid GEDCOM format |
| Slow encryption | Normal for large files (be patient) |

## File Size Considerations

- **Small GEDCOM** (< 1MB): Encrypts in seconds, loads instantly
- **Medium GEDCOM** (1-5MB): Encrypts in 5-10 seconds, loads in 1-2 seconds
- **Large GEDCOM** (> 5MB): May take 10-30 seconds to encrypt, loads slower

For very large files:
1. Consider splitting into smaller trees
2. Or use original gedcom-explorer.com without encryption
3. Or host on password-protected server instead

## Browser Requirements

Works in all modern browsers:
- Chrome/Edge 79+
- Firefox 34+
- Safari 11+

**Does not work in:**
- Internet Explorer
- Very old browsers

Test in private/incognito mode to verify it works for fresh visitors.
