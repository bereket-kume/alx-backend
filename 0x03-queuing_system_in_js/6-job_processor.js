import kue from 'kue';

const queue = kue.createQueue();

const sendNotification = (phoneNumber, message) => {
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

queue.process('push_notification_code', (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message);
    done();
})

queue.on('job complete', (id) => {
    console.log(`Job ${id} completed successfully.`);
});

queue.on("job failed", (id, err) => {
    console.error(`Job ${id} failed with error: ${err.message}`);
})