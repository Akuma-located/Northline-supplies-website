# Northline Supply — Product Request Website

A responsive static website for a small product-sourcing business. It has no online checkout or customer accounts.

## Files

- `index.html` — page content and request form
- `style.css` — dark, rounded design with blue accents
- `script.js` — validation, character counter, and status messages

## Important: activate and test email delivery

The form currently posts to FormSubmit at `landrumsilas@gmail.com`.

1. Have a parent/guardian help with account setup and review the service's terms and privacy implications.
2. Publish the files using GitHub Pages (steps below).
3. Submit one test request using an email address you control.
4. Check the receiving inbox and spam folder. FormSubmit may send an activation email the first time; click its confirmation link before relying on delivery.
5. Submit another test and verify it actually arrives. The page cannot independently guarantee email delivery.

FormSubmit is a third-party service. Review its current privacy policy and terms before collecting other people's information. Keep the form limited to necessary details, and don't collect passwords or sensitive personal data.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `northline-supply`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository's root (not inside another folder).
3. Open the repository's **Settings → Pages**.
4. Under build/deployment, choose **Deploy from a branch**, select the `main` branch and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site. Its URL will be shown in the Pages settings.
6. Open the published URL on desktop and phone, and test the form end-to-end.

A GitHub Pages website is public to anyone who has the URL; an unadvertised URL is not password protection.

## Customization

- Change the displayed business name `Northline Supply` in `index.html` if you want a different brand.
- The recipient address is in the form's `action` attribute in `index.html`.
- Colors, spacing, and responsive layout are in `style.css`.
- `script.js` uses a normal form POST; don't add secret API keys to static files.

## Business and product reminders

- Confirm product authenticity, size/version, shipping, supplier reliability, and the full landed cost before advertising a product as genuine or agreeing to a price.
- Requests are not confirmed orders. Don't collect payment until availability, final price, and delivery expectations are agreed.
- Since the owner is under 18, a parent/guardian should help with accounts, payment arrangements, and any applicable business, tax, or consumer requirements.
