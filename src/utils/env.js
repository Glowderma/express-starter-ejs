import * as dotenv from 'dotenv';
dotenv.config();

const api = {
    nodeEnv: process.env.NODE_ENV || "local",
    port: process.env.PORT || 3000,
    kid: process.env.KID || "undefined",
    jwks: process.env.JWKS_URI || "https://example.com/.well-known/jwks.json"
};

let db = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    user: process.env.PGUSER,
    port: process.env.PGPORT
};

if(api.nodeEnv !== "local") {
    db = {
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        user: process.env.PGUSER,
        port: process.env.PGPORT,
        ssl: {
            rejectUnauthorized: false,
            ca: process.env.CA_CERT,
        },
    };
}

export { api, db };
