# Testing Guide

Complete testing procedures to verify your GEDCOM Explorer implementation works correctly.

## Quick Test Checklist

- [ ] Encryption utility works
- [ ] Manual file upload works (empty state)
- [ ] Password prompt appears with encrypted data
- [ ] Correct password decrypts and loads tree
- [ ] Wrong password shows error
- [ ] All original features work
- [ ] No privacy leaks (network tab)

---

## Test 1: Encryption Utility

**Purpose**: Verify the encryption tool works correctly

### Steps:

1. Open `encrypt.html` in your browser:
   ```bash
   open encrypt.html
   ```

2. Upload `test.ged` (sample file included)

3. Enter password: `test123`

4. Confirm password: `test123`

5. Click "Encrypt GEDCOM"

### Expected Results:

✅ "Encryption successful! 🎉" message appears

✅ Encrypted output appears in textarea (long base64 string)

✅ Instructions section displays

✅ "Copy to Clipboard" button works

### Test Variations:

- **Empty file**: Should handle gracefully
- **Wrong file type**: Should accept any text file
- **Password mismatch**: Button should remain disabled
- **Short password**: Should work (min 4 chars enforced in code)

---

## Test 2: Manual Upload Mode (Empty State)

**Purpose**: Verify file upload works when no encrypted data is embedded

### Prerequisites:

Ensure `app.js` has empty ENCRYPTED_GEDCOM_DATA:
```javascript
const ENCRYPTED_GEDCOM_DATA = "";
```

### Steps:

1. Open `index.html` in browser:
   ```bash
   open index.html
   ```

2. You should see file upload screen

3. Click "Open File" or "Apri File"

4. Select `test.ged`

### Expected Results:

✅ Upload screen appears (no password prompt)

✅ File upload works

✅ Tree renders with 5 people (Smith family)

✅ All features work:
- Navigation between people
- Search functionality
- Timeline shows people
- Calendar view works
- Dark mode toggle works

### Verify:

- Focus person: John Smith (1950-2020)
- Parents: William Smith & Elizabeth Brown
- Spouse: Mary Johnson
- Child: Robert Smith
- Grandparents visible in tree

---

## Test 3: Embedded Encrypted Data (Happy Path)

**Purpose**: Verify password protection works correctly

### Setup:

1. Run encryption utility (Test 1) with `test.ged`
2. Password: `test123`
3. Copy encrypted output
4. Edit `app.js` and paste into `ENCRYPTED_GEDCOM_DATA`
5. Save file

### Steps:

1. Open `index.html` in browser

2. Password prompt should appear immediately

3. Enter password: `test123`

4. Click "Unlock" or press Enter

### Expected Results:

✅ Password modal appears on page load

✅ Upload screen is hidden behind modal

✅ Password input is auto-focused

✅ Enter key triggers decrypt

✅ "Decrypting..." spinner appears

✅ Modal dismisses (1-2 seconds)

✅ Tree loads automatically

✅ Same 5 people as manual upload

✅ All features work normally

---

## Test 4: Wrong Password Handling

**Purpose**: Verify security - wrong password is rejected

### Prerequisites:

Same setup as Test 3 (encrypted data embedded)

### Steps:

1. Open `index.html`

2. Password prompt appears

3. Enter wrong password: `wrong123`

4. Click "Unlock"

### Expected Results:

✅ "Decrypting..." spinner appears briefly

✅ Error message: "Incorrect password. Please try again."

✅ Password field clears

✅ Password input re-focused

✅ Modal remains visible

✅ Can retry with correct password

### Test Again:

5. Enter correct password: `test123`

6. Should decrypt and load successfully

---

## Test 5: Browser Compatibility

**Purpose**: Verify works in different browsers

### Test Matrix:

| Browser | Version | Expected Result |
|---------|---------|-----------------|
| Chrome | Latest | ✅ Full support |
| Firefox | Latest | ✅ Full support |
| Safari | 11+ | ✅ Full support |
| Edge | Latest | ✅ Full support |

### Steps for Each Browser:

1. Open `index.html`
2. Test password prompt (if encrypted data present)
3. Verify tree renders
4. Test all features:
   - [ ] Navigation (click people)
   - [ ] Search
   - [ ] Favorites
   - [ ] Calendar view
   - [ ] Timeline
   - [ ] Dark mode
5. Check console for errors (F12)

### Known Issues:

❌ **Internet Explorer**: Not supported (no Web Crypto API)

❌ **Very old mobile browsers**: May not support AES-GCM

⚠️ **Safari < 11**: May have Web Crypto API issues

---

## Test 6: Privacy & Security

**Purpose**: Verify no data leaks or unexpected network calls

### Steps:

1. Open browser DevTools (F12)

2. Go to **Network** tab

3. Clear network log

4. Open `index.html` with encrypted data

5. Enter password and decrypt

6. Monitor network requests

### Expected Results:

✅ **Only allowed requests:**
- `index.html`
- `app.js`
- `crypto.js`
- `styles.css`
- Google Fonts (Inter font) - optional

❌ **NO requests to:**
- External APIs
- Analytics services (unless you added them)
- Data collection endpoints
- Third-party scripts

### Verify:

- **Local Storage**: Check if favorites are saved locally (Application tab)
- **Cookies**: Should be none (unless from hosting provider)
- **Web Crypto**: All crypto operations happen in browser (no network calls)

---

## Test 7: Feature Verification

**Purpose**: Ensure original GEDCOM Explorer features still work

### 7.1 Navigation

- [ ] Click on a person card → view switches to that person
- [ ] Back button works
- [ ] Home button returns to initial person
- [ ] Indicators (‹ › arrows) show correctly

### 7.2 Search

- [ ] Type in search box → results appear
- [ ] Click result → switches to that person
- [ ] Search is case-insensitive
- [ ] Partial matches work

### 7.3 Favorites

- [ ] Click star on focus card → adds to favorites
- [ ] Click favorites button (★) → dropdown shows list
- [ ] Click favorite in list → switches to that person
- [ ] Remove favorite (✗) works
- [ ] Clear all favorites works
- [ ] Favorites persist after page reload

### 7.4 Timeline

- [ ] Timeline shows at bottom
- [ ] Dots represent people by birth year
- [ ] Focus person has larger highlighted dot
- [ ] Hover shows name and year
- [ ] Click dot switches to that person
- [ ] Century markers display

### 7.5 Calendar View

- [ ] Click calendar icon (📅) → switches to calendar
- [ ] Events organized by month/day
- [ ] Births, marriages, deaths shown separately
- [ ] Click event → switches to that person
- [ ] "TODAY" button scrolls to today's date
- [ ] Today's row is highlighted
- [ ] Month navigation buttons work

### 7.6 Multi-Language

- [ ] Language selector works
- [ ] All text updates when language changes
- [ ] Date formats localize correctly
- [ ] Test at least: English, Italian, Spanish

### 7.7 Dark Mode

- [ ] Moon icon (☾) toggles dark mode
- [ ] All colors adapt to dark theme
- [ ] Preference persists after reload
- [ ] Readability is good in both modes

### 7.8 GEDCOM Parsing

- [ ] Names display correctly (given name + surname)
- [ ] Dates parse correctly (various formats)
- [ ] Places display correctly
- [ ] Parent-child relationships correct
- [ ] Spouse relationships correct
- [ ] Multiple marriages handled
- [ ] Missing data handled gracefully

---

## Test 8: Performance

**Purpose**: Verify acceptable performance with various file sizes

### Test with Different GEDCOM Sizes:

| Size | People Count | Expected Load Time |
|------|-------------|-------------------|
| Small | < 100 | < 1 second |
| Medium | 100-1,000 | 1-3 seconds |
| Large | 1,000-10,000 | 3-10 seconds |
| Very Large | > 10,000 | 10+ seconds |

### Steps:

1. Use your actual GEDCOM file (or larger test file)
2. Encrypt it
3. Embed in app.js
4. Open in browser
5. Measure time from password entry to tree display

### Monitor:

- **Browser memory**: Should not exceed 500MB for typical files
- **CPU usage**: Spike during decryption, then settle
- **Responsiveness**: UI should remain interactive

### If Too Slow:

- Consider reducing PBKDF2 iterations (in crypto.js, line 8)
  - Current: 100,000 (very secure but slower)
  - Alternative: 50,000 (faster, still secure)
- Or split large trees into smaller files

---

## Test 9: Mobile Responsive

**Purpose**: Verify works on mobile devices

### Test on:

- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad/Android)

### Check:

- [ ] Password modal displays correctly
- [ ] Tree view is usable (scrollable)
- [ ] Cards are readable
- [ ] Search works
- [ ] Calendar view works
- [ ] No horizontal scrolling issues
- [ ] Touch interactions work

### Known Mobile Behaviors:

- Cards may be smaller on mobile
- Horizontal scrolling expected for 7 generations
- Some text may wrap differently

---

## Test 10: Edge Cases

**Purpose**: Verify robustness with unusual inputs

### 10.1 Empty GEDCOM

- Upload empty .ged file
- Should show error or empty state
- Should not crash

### 10.2 Corrupted Encrypted Data

- Modify encrypted string in app.js (change a few characters)
- Enter correct password
- Should show "Incorrect password or corrupted data"

### 10.3 Very Long Password

- Test with 50+ character password
- Should work (no length limit)

### 10.4 Special Characters in Password

- Test with: `P@ssw0rd!#$%^&*(){}[]`
- Should work (all characters supported)

### 10.5 Unicode in GEDCOM

- Test with names containing: é, ñ, ü, 中文, العربية
- Should display correctly (UTF-8 support)

---

## Automated Testing (Optional)

For developers who want to add automated tests:

```javascript
// Example test with Jest or similar

describe('Encryption/Decryption', () => {
  test('encrypt then decrypt returns original', async () => {
    const original = "test data";
    const password = "testpass";

    const encrypted = await encryptGEDCOM(original, password);
    const decrypted = await decryptGEDCOM(encrypted, password);

    expect(decrypted).toBe(original);
  });

  test('wrong password throws error', async () => {
    const original = "test data";
    const encrypted = await encryptGEDCOM(original, "correct");

    await expect(
      decryptGEDCOM(encrypted, "wrong")
    ).rejects.toThrow();
  });
});
```

---

## Deployment Testing

**Purpose**: Verify production deployment works

### After deploying to hosting:

1. **Fresh Browser Test**:
   - Open site in incognito/private window
   - Password prompt should appear
   - Enter password
   - Tree should load

2. **Share Test**:
   - Share URL with trusted person
   - Send password separately
   - Verify they can access it

3. **Network Test**:
   - Open DevTools → Network
   - Verify HTTPS (🔒)
   - Check all resources load from your domain
   - No mixed content warnings

4. **Mobile Test**:
   - Open on mobile device
   - Verify responsive layout
   - Test all features

---

## Bug Report Template

If you find issues, document them:

```
### Bug Description
[Clear description of the problem]

### Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Environment
- Browser: [Chrome 120.0]
- OS: [macOS 14.0]
- File Size: [500KB, 1000 people]
- Error Messages: [Any console errors]

### Screenshots
[If applicable]
```

---

## Performance Benchmarks

Reference benchmarks on typical hardware:

| Operation | Time (typical) |
|-----------|---------------|
| Encrypt 100KB GEDCOM | 2-3 seconds |
| Decrypt 100KB GEDCOM | 1-2 seconds |
| Parse 1000 people | < 1 second |
| Render tree | < 500ms |
| Switch person | < 200ms |
| Search | < 100ms |

If significantly slower, check:
- Large file size
- Slow device/browser
- Other tabs consuming resources
- Browser extensions interfering

---

## Final Checklist

Before sharing with family:

- [ ] All tests above pass
- [ ] Password is strong and secure
- [ ] Encrypted data embedded correctly
- [ ] Tested on multiple browsers
- [ ] Tested on mobile
- [ ] Verified privacy (no unexpected network calls)
- [ ] Deployment successful
- [ ] Password shared separately from URL
- [ ] Instructions sent to recipients

**Ready to share!** 🎉
