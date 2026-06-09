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

This project includes a backend-powered visitor homage section. Messages are stored in the hosting MySQL database, so approved messages are visible to all visitors.

### Database and schema setup

The Node server connects to MySQL using the `mysql2` driver and creates the `hommages` table automatically on startup. The production defaults match the Plesk database shown for this site:

```text
Host: 10.243.11.128
Port: 3306
Database: smriti_gupta_om
User: smriti_gupta_om
```

Set `HOMMAGE_DB_PASSWORD` to the MySQL password for that user before starting the server. The server creates this table if it does not already exist:

```sql
CREATE TABLE IF NOT EXISTS hommages (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  approved TINYINT(1) NOT NULL DEFAULT 0,
  rejected TINYINT(1) NOT NULL DEFAULT 0,
  ip_hash CHAR(64),
  PRIMARY KEY (id),
  INDEX idx_hommages_public (approved, rejected, created_at),
  INDEX idx_hommages_ip_created (ip_hash, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

Public display only returns rows where `approved = 1`, `rejected = 0`, and `created_at` is within the last 7 days. Results are sorted newest first.

### Required environment variables

Set these variables in production before starting the server:

```sh
# Required: password used by the protected moderation page/API.
HOMMAGE_ADMIN_PASSWORD="replace-with-a-long-private-password"

# Required: MySQL password for the smriti_gupta_om user.
HOMMAGE_DB_PASSWORD="replace-with-the-plesk-mysql-password"

# Strongly recommended: private salt used to hash submitter IP addresses for rate limiting.
HOMMAGE_IP_HASH_SALT="replace-with-a-long-random-secret"

# Optional: MySQL connection settings. Defaults are shown here.
HOMMAGE_DB_HOST="10.243.11.128"
HOMMAGE_DB_PORT=3306
HOMMAGE_DB_NAME="smriti_gupta_om"
HOMMAGE_DB_USER="smriti_gupta_om"
HOMMAGE_DB_CONNECTION_LIMIT=5

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
HOMMAGE_ADMIN_PASSWORD="change-me" HOMMAGE_DB_PASSWORD="mysql-password" HOMMAGE_IP_HASH_SALT="local-dev-salt" npm run server
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
