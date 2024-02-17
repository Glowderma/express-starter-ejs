This template sets up `winston` for logging. `ejs`, `jquery`, and `bootstrap` for view/UI.

Before running this application copy and modify `sample.env` to `.env` file accordingly. 

Regarding `express-rate-limit` see the [doc](https://express-rate-limit.mintlify.app/quickstart/usage)

### Notes about `@databases/pg-migrations`

Create a directory for your migrations called `migrations` under `src`. 

In that directory, create a file called: `0001-initial-migration.sql`
- You can use any number, then a `-` and then any name. 
- You can write migrations in SQL (with a `.sql` extension) or TypeScript (with a `.ts` extension)
- Migrations are run in numerical order. You can use sequential integers, or if you want to reduce the risk of collisions with multiple team members creating migrations, you could use a timestamp.

To run the migrations, run:
- `pg-migrations apply --directory my-migrations-directory`

This will apply any pending migrations.

#### Options
- `--database` - The connection string for your database
- `--directory` - The folder containing your migrations 
- `--dry-run` - Check for inconsistencies and pending migrations without actually applying them 
- `--help` - Print detailed usage info

[Reference Docs](https://www.atdatabases.org/docs/pg-migrations)


### Notes about `cors`

When you have the hosting url update `cors` settings in `app.js` as follows
```
const corsOptions = {
    origin: 'https://example.com'
};

app.use(cors(corsOptions));
```
[Reference Docs](https://www.npmjs.com/package/cors)
