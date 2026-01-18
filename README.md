# GEDCOM Explorer Fork

A password-protected, client-side GEDCOM family tree viewer. This is a fork of [gedcom-explorer.com](https://gedcom-explorer.com) with added encryption support for secure sharing.

## Features

✨ **Password Protection**: Encrypt your GEDCOM file with a password for secure sharing
🔒 **Client-Side Encryption**: All encryption/decryption happens in your browser (AES-GCM with PBKDF2)
📦 **Embedded Data**: GEDCOM data is embedded in the app - no file uploads needed by recipients
🌐 **Fully Static**: Deploy to GitHub Pages, Netlify, or any static hosting
🎨 **Beautiful UI**: Seven-generation tree view with timeline and calendar
🌍 **Multi-Language**: Support for English, Italian, Spanish, French, and German
🌙 **Dark Mode**: Toggle between light and dark themes

## How It Works

### For You (Owner):
1. Use the encryption utility to encrypt your GEDCOM file with a password
2. Embed the encrypted data in the app
3. Deploy to static hosting (GitHub Pages, Netlify, etc.)
4. Share the URL and password (separately!) with family members

### For Recipients:
1. Open the shared URL
2. Enter the password you received
3. View the family tree - no file uploads needed!

## Quick Start

### Step 1: Encrypt Your GEDCOM File

1. Open `encrypt.html` in your browser
2. Upload your GEDCOM file (.ged)
3. Enter a strong password (min 4 characters)
4. Click "Encrypt GEDCOM"
5. Copy the encrypted text from the output box

### Step 2: Embed the Encrypted Data

1. Open `gedcom-data.js` in your code editor
2. Find this line:
   ```javascript
   const ENCRYPTED_GEDCOM_DATA = "";
   ```
3. Paste your encrypted data between the quotes:
   ```javascript
   const ENCRYPTED_GEDCOM_DATA = "U2FsdGVkX1+...very long string...";
   ```
4. Save the file

### Step 3: Test Locally

1. Open `index.html` in a modern browser
2. You should see a password prompt
3. Enter your password - the tree should load

### Step 4: Deploy

Choose one of these hosting options:

#### GitHub Pages (Recommended)
```bash
# Create a new GitHub repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main

# Enable GitHub Pages in repository settings:
# Settings → Pages → Source: main branch → Save
```

Your site will be available at: `https://yourusername.github.io/your-repo/`

#### Netlify
1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! You'll get a URL like `https://random-name.netlify.app`

#### Vercel
```bash
npm install -g vercel
vercel
```

## Project Structure

```
gedcom-explorer-fork/
├── index.html          # Main viewer application
├── encrypt.html        # Encryption utility (not deployed)
├── app.js             # Core GEDCOM parsing & rendering logic
├── gedcom-data.js     # Encrypted GEDCOM data storage
├── crypto.js          # Encryption/decryption functions
├── styles.css         # Styling
└── README.md          # This file
```

## Security Notes

### ✅ What's Secure:
- **Strong Encryption**: AES-GCM 256-bit encryption with authenticated encryption
- **Key Derivation**: PBKDF2 with 100,000 iterations (slows brute force attacks)
- **Random Salt & IV**: Each encryption uses unique random values
- **Client-Side Only**: Password never leaves your browser
- **No Server**: Fully static, no backend to compromise

### ⚠️ Important Limitations:
- **Password Strength**: Security depends entirely on password strength
  - ✅ Good: "MyFamily2024!TreeSecure"
  - ❌ Bad: "password", "1234", "Smith"
- **Separate Communication**: Never send password and URL together
  - ✅ Good: Email URL, text/call password
  - ❌ Bad: Same email with both
- **Public Hosting**: The encrypted data is publicly accessible (but encrypted)
- **Browser-Based**: Anyone with URL + password can access the data

### 🔐 Best Practices:
1. Use a password manager to generate strong passwords
2. Share password via different channel than URL (phone, SMS, secure messaging)
3. Change password periodically and re-encrypt
4. Don't commit sensitive data to public repositories
5. Consider using private repository if on GitHub

## Development

### File Upload Mode (Testing)

If `ENCRYPTED_GEDCOM_DATA` is empty, the app runs in manual upload mode:
- Users can upload their own .ged files
- No password protection
- Perfect for development and testing

### Encryption Algorithm Details

```
User Password
    ↓
PBKDF2 (100k iterations, SHA-256)
    ↓
AES-256-GCM Key
    ↓
Encrypt GEDCOM → [Salt(16) + IV(12) + Ciphertext]
    ↓
Base64 Encode → Embedded String
```

**Decryption Process:**
```
Base64 String → Decode
    ↓
Extract: Salt(16) + IV(12) + Ciphertext
    ↓
Derive Key from Password + Salt
    ↓
AES-256-GCM Decrypt → Original GEDCOM
```

## Customization

### Change Theme Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --bg-deep: #f2f0e9;
    --text-main: #3d3a36;
    --text-accent: #5c7a8a;
    /* ... more variables ... */
}
```

### Change Default Language

Edit `setLanguage()` call in `index.html`:
```html
<button class="lang-btn active" onclick="setLanguage('en')">🇺🇸</button>
```

## Troubleshooting

### "Incorrect password" error
- Double-check password (case-sensitive)
- Make sure you copied the complete encrypted string
- Ensure no extra spaces or line breaks were added

### Password prompt doesn't appear
- Check that `ENCRYPTED_GEDCOM_DATA` is not empty
- Open browser console (F12) to check for errors
- Verify gedcom-data.js is loaded before crypto.js and app.js

### Tree doesn't render
- Check browser console for errors
- Verify GEDCOM file is valid (test with original gedcom-explorer.com first)
- Try re-encrypting with a fresh export

### Deployment issues
- Ensure all files (index.html, app.js, gedcom-data.js, crypto.js, styles.css) are uploaded
- Check that paths are relative, not absolute
- Clear browser cache if seeing old version

## Browser Compatibility

Requires modern browser with Web Crypto API support:
- ✅ Chrome 37+
- ✅ Firefox 34+
- ✅ Safari 11+
- ✅ Edge 79+

**Not supported:**
- ❌ Internet Explorer
- ❌ Very old mobile browsers

## Credits

- Original GEDCOM Explorer: [gedcom-explorer.com](https://gedcom-explorer.com)
- Fork by: [Your Name]
- Encryption implementation: Web Crypto API (browser native)

## License

This is a fork of the original GEDCOM Explorer. Please check the original project for licensing information.

## Support

For issues specific to this fork:
- Open an issue on your repository

For questions about the original GEDCOM Explorer:
- Visit [gedcom-explorer.com](https://gedcom-explorer.com)

---

**Remember:** The security of your family tree depends on:
1. A strong password
2. Secure password sharing (separate from URL)
3. Trusted recipients

Happy exploring! 🌳👨‍👩‍👧‍👦
