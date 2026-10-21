# Tax Guy
A responsive tax professional marketplace prototype with search, filters, portfolio generation, and local assistant chat.

## Run
Requires Node.js 20+. No dependencies to install.

```
npm start
npm test
```
Server listens on port 3000 (override with PORT). Use the existing isolated checkout; no worktree is needed.

## Demo boundaries
Profiles, photos, ratings, and reviews are illustrative. Newly created portfolios, chat history, and simulated fee unlocks are stored in browser localStorage. No payment is collected and no message is delivered to a real professional. External images and Google Fonts require internet; layout has system font fallbacks.

Before production, implement authenticated client/pro accounts, database storage, real-time messaging, professional verification, server-side contact moderation, and payment-provider checkout with verified webhooks. The browser screening is a demonstration and can be bypassed; production must enforce fee status and message rules on the server. Tax service fees are separate from the illustrative $29 platform fee. Never enter real tax documents or personal financial information in the demo.
