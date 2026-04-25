import Queue from 'bull';

import { REDIS_HOST, REDIS_PORT } from '../config/serverConfig.js';
import redisConfig from '../config/redisConfig.js';

const mailQueue = new Queue('mailQueue', {
    redis: redisConfig
});

// 👇 ADD THIS
mailQueue.on('error', (err) => {
    console.error('❌ Redis connection error:', err);
});

mailQueue.on('waiting', (jobId) => {
    console.log('⏳ Job waiting:', jobId);
});

mailQueue.on('active', (job) => {
    console.log('🚀 Job started:', job.id);
});

export default mailQueue;