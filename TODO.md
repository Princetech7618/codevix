# TODO - BlackboxAI changes

## Step 1: CRM removal
- [ ] Update `src/components/Crmcard.jsx` to remove CRM-specific items/wording.

## Step 2: Home services grid + app->marketing
- [ ] Update `src/app/page.js` service cards (replace “App Development” offering with marketing-focused offering).
- [ ] Add SEO CTA block(s) to `src/app/page.js`.

## Step 3: Services page app->marketing
- [ ] Update `src/app/services/page.js`: replace the “App Development” section with “Marketing/Growth/SEO Campaigns”.

## Step 4: Deployment section -> Vercel only
- [ ] Update cloud/deployment sections in `src/app/page.js` and `src/app/services/page.js` to only mention Vercel.

## Step 5: Technologies whitelist
- [ ] Update `src/app/technologies/page.js` so it only includes: html, css, react, tailwind, next, node.
- [ ] Remove all other tech mentions from UI and `metadata` keywords/openGraph.

## Step 6: Font weight bold->semibold
- [ ] In the edited files, replace `font-bold`/`font-black` with `font-semibold` wherever applicable.

## Step 7: Build & lint
- [ ] Run `npm run lint`
- [ ] Run `npm run build`

