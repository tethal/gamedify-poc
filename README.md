## Getting Started

Install dependencies

```bash
npm install
```

Setup a database in supabase, create connection strings in settings | database and put them in `.env.local` file as
follows:

```
DATABASE_URL="postgres://postgres.[supabase project name]:[supabase password]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgres://postgres.[supabase project name]:[supabase password]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
```

Add a secret (use e.g. `openssl rand -base64 32` to generate) to `.env.local`:

```
NEXTAUTH_SECRET="VVX4Z3JaxNkGfuMkMWyN08F2KzSaPIhwngC02676W8w="
```

To enable dummy admin user, put the following in `.env.local`:

```
DEV_AUTH="true"
```

Initialize tables

```bash
npm run migrate-dev
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
