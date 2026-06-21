# Corrina & Evan — Wedding Website

**March 25, 2027 · Fort Myers, Florida**

A polished, mobile-first wedding invitation website for Corrina Hohl and Evan Cassell.

---

## Quick Start

```bash
cd wedding/website
npm install
npm run dev
```

The site opens at **http://localhost:3000**

---

## Commands

| Command           | Purpose                                          |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Start local dev server with hot reload           |
| `npm run build`   | Create production build in `dist/`               |
| `npm run preview` | Preview the production build locally             |

---

## Editing Content

**Almost everything guests read lives in one file:**

```
src/site-content.js
```

Open that file to update:

- Couple's names
- Wedding date and RSVP deadline
- Event times (ceremony, reception, welcome party, Red Sox game, beach day)
- Venue names and addresses
- Google Maps links
- Story copy and scripture
- FAQ answers
- Contact email
- All "TBD" placeholders

### How to update a specific thing

#### Change the RSVP deadline
In `site-content.js`, find `rsvpDeadline` under `weddingDate` and update the value.

#### Update an event time
In `site-content.js`, find the event (e.g., `events.ceremony`) and change the `time` field.

#### Show or hide a section
Change any toggle at the top of `site-content.js`:

```js
showWelcomePartyDetails: true,   // true = show venue & time; false = "details shared with guests"
showWeddingParty: true,          // false = hide wedding party section entirely
showHotelInformation: true,      // true = show hotel cards
showRSVPForm: false,             // false = show "RSVP Coming Soon" placeholder
```

#### Add welcome party details
1. In `site-content.js`, set `showWelcomePartyDetails: true`
2. Fill in `events.welcomeParty.venue`, `events.welcomeParty.address`, and `events.welcomeParty.time`
3. Fill in `events.welcomeParty.mapsUrl` with a Google Maps link

#### Update Google Maps links
Each event has a `mapsUrl` field in `site-content.js`. Replace the value with the correct Google Maps URL. Format:

```
https://maps.google.com/?q=Address+Here+FL+12345
```

---

## Replacing Photographs

Website images live in:

```
public/images/
├── crest/        — crest.png, heading.png
├── engagement/   — proposal.jpeg, kiss.jpg, adventure.jpg, selfie.jpg
├── couple/       — chop-it-up.jpg
├── ceremony/     — edison.jpg
└── beach/        — lighthouse.jpg, sanibel.jpg
```

To swap a photo:
1. Place your new image in the appropriate folder with the same filename
2. Or update the `src` attribute in `index.html`
3. Always update the `alt` text too

**Hero image:** `public/images/engagement/proposal.jpeg`
To change it, update `src` on the `<img id="hero-img" ...>` tag in `index.html`.

---

## Adding the Licensed Parfumerie Script Font

The site currently uses **Pinyon Script** from Google Fonts as a fallback.
If you purchase and license Parfumerie Script:

1. Place the font files in a new folder:
   ```
   public/fonts/parfumerie-script.woff2
   public/fonts/parfumerie-script.woff
   ```

2. In `src/styles.css`, uncomment the `@font-face` block at the top of the file.

3. In `tailwind.config.js`, update the `fontFamily.script` array to put `'Parfumerie Script'` first:
   ```js
   script: ['Parfumerie Script', 'Pinyon Script', 'Great Vibes', cursive],
   ```

---

## Connecting the RSVP Form

> ⚠ The RSVP form is **front-end only**. It validates and shows a success message but does not transmit or store any data.

To wire it up, choose one of these options:

### Option A — Formspree (easiest)
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. In `index.html`, find `<form id="rsvp-form"` and add `action="https://formspree.io/f/YOUR_ID" method="POST"`
4. In `src/main.js`, find the comment `// ⚠ RSVP FORM IS NOT CONNECTED` and replace the fake success block with `form.submit()`

### Option B — Netlify Forms
1. Deploy the site on Netlify
2. Add `netlify` and `data-netlify="true"` attributes to the `<form>` tag
3. Add a hidden `input[name="form-name"]` with value `"rsvp"`
4. Netlify handles the rest automatically

### Option C — Google Apps Script
1. Create a Google Sheet
2. Attach an Apps Script that reads form POST data and appends a row
3. Deploy as a web app and use its URL as the form action

### Option D — Supabase
1. Create a Supabase project and an `rsvps` table
2. In `src/main.js`, replace the fake success block with a `fetch()` call to your Supabase REST endpoint

---

## Updating the Open Graph Sharing Image

The social share image is referenced in `index.html`:
```html
<meta property="og:image" content="/images/engagement/proposal.jpeg" />
```

For best results on social sharing, create a `1200×630` version of your preferred photo and update this path.

---

## Venue Addresses to Verify Before Publishing

| Venue | Address in Code | Status |
|-------|----------------|--------|
| Edison & Ford Winter Estates | 2350 McGregor Blvd, Fort Myers, FL 33901 | ✅ Verify before publishing |
| Oasis Outdoors / Chop It Up | 1001 Palm Ave, North Fort Myers, FL 33903 | ✅ Verify before publishing |
| JetBlue Park | 14400 Ben C Pratt/Six Mile Cypress Pkwy, Fort Myers, FL 33912 | ✅ Verify before publishing |
| Lighthouse Beach Park | 110 Periwinkle Way, Sanibel, FL 33957 | ✅ Verify before publishing |

---

## Deploying the Site

After running `npm run build`, the `dist/` folder is a self-contained static site.

### Netlify (recommended)
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```
Or connect your repo and set build command `npm run build` with publish directory `dist`.

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
1. Push the repo to GitHub
2. In repo settings → Pages, select the `dist` folder or use a GitHub Actions workflow

### Any static host (Cloudflare Pages, Render, etc.)
Build command: `npm run build`  
Publish directory: `dist`

---

## Before You Publish — Checklist

- [ ] Verify all venue addresses
- [ ] Add ceremony and reception times when confirmed
- [ ] Add the contact email in `site-content.js` → `contact.email`
- [ ] Connect the RSVP form to a backend
- [ ] Update the canonical URL and og:url in `index.html`
- [ ] Confirm dress code and parking details
- [ ] Add welcome party venue details
- [ ] Add hotel recommendations
- [ ] Test on iPhone (Safari) and Android (Chrome)
- [ ] Share the link with the couple to approve all copy
