# H A S Royal Cool Service - v3 deployment guide

Upload the CONTENTS of this folder to Netlify (drag & drop) or any static host. No build step.

## Site structure (20 pages)
Header: Home | About | Services (dropdown: 10 service pages + All Services last) | AC Service | Booking | Blog | Contact
- Core: index, about, ac-service, booking, blog, contact, all-services
- Service pages: ac-repair, fridge-repair, washing-machine-repair, geyser-repair, microwave-repair, deep-freezer-repair, ro-purifier-service, chimney-service, tv-repair, bulk-commercial-ac-installation
- Utility: thankyou, privacy-policy

## What was removed (and where it went)
No location pages (Nalasopara/Vasai/Virar/Naigaon East/West) and no separate blog articles.
- The 6 blog guides now live inside blog.html as "Read the full guide" panels.
- Gas charging, installation, cassette, ductable and commercial AMC are now sections on ac-service.html.
- _redirects sends every old URL to its new home with a 301, so no SEO value or bookmarks are lost.
- The removed HTML files are in removed-pages-backup.zip (kept OUT of this folder).

## Images
All images live in ONE folder: images/ (sub-folders per service, plus images/site/ for the original logo, team and banner photos). All .jpg except your original logo PNG.

## Photo galleries
Each service page and the home page show an "Our Recent Work" photo strip using images/<service>/work-1.jpg, work-2.jpg and card.jpg.
Replace those JPGs (same file name, .jpg) with your real job photos anytime.

## Booking forms
Every page has its own form design (5 layouts x 5 colours) with friendlier labels, 3-step strip and help text. Behaviour is unchanged: same web3forms key, same field names and service options.

## Untouched
web3forms submission (same key, fields, options), Google Ads tag + click-to-call conversion, Microsoft Clarity,
tel: links, WhatsApp links and floating buttons, and every original CSS/JS/lib/img file.

## Before going live
1. Domain is https://hasroyalcoolservice.netlify.app in canonicals/sitemap/robots - change it if you use another.
2. Check the claims (10 Years Experience, 3000+ Customers, same-day, 30-minute inspection) are true for you.
3. Booking dropdown now lists every service, grouped appliance-wise (AC, Chimney, Deep Freezer, Fridge, Geyser, Microwave, RO, TV, Washing Machine).
4. Submit sitemap.xml in Google Search Console. Test with PageSpeed Insights.
