import { Queue } from 'bullmq';

import redisConfig from '../config/redisConfig.js';

const testQueue = new Queue('testQueue', {
    connection: redisConfig
});


export default testQueue;