import { Queue } from 'bullmq';

import redisConfig from '../config/redisConfig.js';

const mailQueue = new Queue('mailQueue', {
    connection: redisConfig
});


export default mailQueue;