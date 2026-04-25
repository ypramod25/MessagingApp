import {Worker} from 'bullmq';

import mailer from '../config/mailConfig.js';
import redisConfig from '../config/redisConfig.js';

new Worker('mailQueue', async (job) => {
    const emailData = job.data;
    console.log('Processing email job:', emailData);

    try {
        const response = await mailer.sendMail(emailData); 
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Re-throw the error to let BullMQ handle retries
    }
}, {
    connection: redisConfig, // Use the same Redis connection as the queue
    concurrency: 5 // Process up to 5 email jobs concurrently
});
