# Malviya Dental Home website

Open `index.html` in a browser to view the site. No installation or build step.

## Where to edit what

| To change...                                   | Edit this file          |
|------------------------------------------------|-------------------------|
| Phone, WhatsApp, email, address, map link, Google rating, opening hours | `data/contact.js` |
| Hero headline, "dental home" text, "great hands" points, booking text, location text, footer note, menu | `data/content.js` |
| Doctors (add, remove, reorder, bios, photos)   | `data/doctors.js`       |
| Treatment cards and the small "Also" list      | `data/services.js`      |
| Membership price and benefits                  | `data/membership.js`    |
| International patient steps                    | `data/international.js` |
| Before and after cases                         | `data/results.js`       |
| Patient reviews                                | `data/reviews.js`       |
| Colours, fonts, spacing                        | `css/styles.css` (the values at the top, under `:root`) |
| Page title and description for Google          | `<head>` of `index.html` |

Everything inside the quotes is plain text. Keep the quotes, commas and brackets exactly as they are.

## Common jobs

**Update the Google rating.** In `data/contact.js`, change `score` and `count`. The hero and the reviews section both update.

**Add a review.** In `data/reviews.js`, copy one `{ name: ..., text: ... }` block, paste it below with a comma after the previous block, and change the text. Use the patient's own words. Then update the review count in `data/contact.js`.

**Add a doctor.** In `data/doctors.js`, copy one doctor block, paste it in the list, and change the details. Put the photo in the `images` folder and use its file name in `photo`. The "4 specialist dentists" number in the hero updates by itself. Only one doctor should have `lead: true`.

**Change the membership price or discounts.** Edit the numbers in `data/membership.js`. The page text and the "worth" total update automatically.

**Add a treatment card.** In `data/services.js`, copy one block inside `items`. It also appears in the booking form's Treatment menu automatically.

**Add or replace a photo.** Drop the file into `images/` and use its exact file name in the data file. Keep photos under about 300 KB (JPG) so the page stays fast.

## Before you publish

- Upload the whole folder, keeping the folders as they are, to your web host (Netlify, or your own hosting). Keep `index.html` in the top level.
- Add your Google Ads tag inside the `<head>` of `index.html`. Do not paste it as visible text.
- Once you have your domain, add `<link rel="canonical" href="https://yourdomain.com/">` and a share image (`og:image`) to the `<head>`.
- The booking form opens WhatsApp or the visitor's email app. It does not store enquiries. A form service can be added later.
- The fonts load from Google Fonts. To self-host them (useful for visitors in Europe), download Italiana and Figtree and point `css/styles.css` at the files.
- Google reads this page after running its scripts, which it does reliably, but a simple build step that writes the data into plain HTML is an option later if you want the strongest search visibility.

## Folder map

```
index.html          page skeleton and meta tags
css/styles.css      all styling
js/render.js        builds the page from the data files
js/app.js           menu, treatment pre-select, booking form
data/               all the words and numbers (edit these)
images/             all photos and the logo
```
