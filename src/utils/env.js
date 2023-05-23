import * as dotenv from 'dotenv';
dotenv.config();

const api = {
    nodeEnv: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000
};

export { api };
