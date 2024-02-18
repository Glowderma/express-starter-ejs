import app from './app.js';
import {api} from "./utils/env.js";
import logger from "./utils/logger.js";

const server = app.listen(api.port, (err) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info(`Successfully launched in ${api.nodeEnv} environment on port ${api.port}`);
    }
});

function terminationHandler(signal) {
    logger.info(`Received ${signal} signal`);
    server.close((err) => {
        if(err) {
            logger.error(`Terminated with error: ${err}`);
        } else {
            logger.info('Terminated without error');
        }
    });
}

process.on('SIGINT', terminationHandler);
process.on('SIGTERM', terminationHandler);
process.on('SIGQUIT', terminationHandler);
