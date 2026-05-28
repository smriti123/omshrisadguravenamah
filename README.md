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

This project includes a backend-powered visitor homage section. Messages are stored in SQLite on the server, not in browser `localStorage`, so approved messages are visible to all visitors.

### Database and schema setup

The Node server uses the built-in `node:sqlite` module and creates the SQLite database and schema automatically on startup. Use a Node.js runtime that includes `node:sqlite` (Node 22.5+ or newer is recommended; Node 24+ was used for validation). By default it stores the database at:

```sh
data/hommage.sqlite
```

Keep this file outside any public/static web folder. The default `data/` path is not served by the app and is ignored by Git.

The server creates this table:

```sql
CREATE TABLE IF NOT EXISTS hommages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  approved INTEGER NOT NULL DEFAULT 0,
  rejected INTEGER NOT NULL DEFAULT 0,
  ip_hash TEXT
);
```

Public display only returns rows where `approved = 1`, `rejected = 0`, and `created_at` is within the last 7 days. Results are sorted newest first.

### Required environment variables

Set these variables in production before starting the server:

```sh
# Required: password used by the protected moderation page/API.
HOMMAGE_ADMIN_PASSWORD="replace-with-a-long-private-password"

# Strongly recommended: private salt used to hash submitter IP addresses for rate limiting.
HOMMAGE_IP_HASH_SALT="replace-with-a-long-random-secret"

# Optional: SQLite file location. Keep it outside the public web root.
HOMMAGE_DB_PATH="/absolute/private/path/hommage.sqlite"

# Optional: server port. Hosting providers often set this automatically.
PORT=3000

# Optional: built frontend directory served by the Node server.
PUBLIC_DIR="dist"
```

For local frontend development against a separately running backend, set `VITE_API_BASE_URL` to the backend origin. In production on the same domain, leave it unset.

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

New submissions are saved with `approved = 0` and do not appear publicly until approved from the moderation page.

### Short testing instructions

1. Run `npm test` to check the homage validation rules.
2. Run `npm run build` to verify the React/Vite application compiles.
3. Start the server with the environment variables above.
4. Submit a message from the Hommage section and confirm the success message: “Thank you. Your message will be displayed after review.”
5. Visit `/admin/hommages`, enter `HOMMAGE_ADMIN_PASSWORD`, approve the message, and confirm it appears publicly.
6. To verify 7-day expiry manually, update a test row's `created_at` to more than 7 days ago and confirm it no longer appears in `/api/hommages`.
