import * as dotenv from 'dotenv';
dotenv.config();

const api = {
    nodeEnv: process.env.NODE_ENV || "local",
    port: process.env.PORT || 3000,
    kid: process.env.KID || "undefined",
    jwks: process.env.JWKS_URI || "https://example.com/.well-known/jwks.json"
};

export { api };
