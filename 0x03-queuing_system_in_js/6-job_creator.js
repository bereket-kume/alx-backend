import kue from "kue"

const queue = kue.createQueue();

const jobData = {
    phoneNUmber: "251941545652",
    message: "Hello, this is a test notification"
}

const job = queue.create("push_notification_code", jobData).save((err) => {
    if (!err) {
        console.log(`Notification job created: ${job.id}`)
    } else {
        console.error('Error creating job:', err);
    }
});

job.on("complete", () => {
    console.log('Notification job completed');
})

job.on("failed", (err) => {
    console.error("Notification job failed:", err);
});
