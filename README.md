# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Visitor Hommage / श्रद्धांजलि संदेश feature

This project includes a lightweight backend-powered visitor homage section. Messages are stored in server memory, so they are visible to all visitors while the Node process is running and reset whenever the server restarts. No MySQL database or database credentials are required.

### Required environment variables

Set these variables before starting the server if you need admin moderation access:

```sh
# Required only for the protected moderation page/API.
HOMMAGE_ADMIN_PASSWORD="replace-with-a-long-private-password"

# Strongly recommended: private salt used to hash submitter IP addresses for rate limiting.
HOMMAGE_IP_HASH_SALT="replace-with-a-long-random-secret"

# Optional: server port. Hosting providers often set this automatically.
PORT=3000

# Optional: built frontend directory served by the Node server.
PUBLIC_DIR="dist"
```

For local frontend development, `npm run dev` includes the homage API through Vite middleware, so form submissions to `/api/hommages` work without starting a separate backend. If you intentionally use a separately running backend, set `VITE_API_BASE_URL` to that backend origin. In production on the same domain, leave it unset.

### Build and run

```sh
npm install
npm run build
HOMMAGE_ADMIN_PASSWORD="change-me" HOMMAGE_IP_HASH_SALT="local-dev-salt" npm run server
```

Open the public site at `http://localhost:3000/`. Open moderation at:

```text
http://localhost:3000/admin/hommages
```

New submissions are approved immediately and appear publicly for 7 days while the process remains running.

### Short testing instructions

1. Run `npm test` to check the homage validation rules.
2. Run `npm run build` to verify the React/Vite application compiles.
3. For local development, run `npm run dev`; the Vite development server handles `/api/hommages` automatically.
4. For a production-like run, start the server with the environment variables above.
5. Submit a message from the Hommage section and confirm the success message: “Thank you. Your message is now visible to all visitors.”
6. Restart the server to confirm in-memory homage messages are cleared.
