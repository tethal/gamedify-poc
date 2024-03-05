## Getting Started

Install dependencies
```bash
npm install
```

Setup a database in supabase, create connection strings in settings | database and put them in `.env.local` file as follows:
```
DATABASE_URL="postgres://postgres.[supabase project name]:[supabase password]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgres://postgres.[supabase project name]:[supabase password]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
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
