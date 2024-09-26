// 7-job_creator.js
import kue from 'kue';

// Create an array of jobs
const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

// Create a Kue queue named push_notification_code_2
const queue = kue.createQueue();

// Loop through the jobs array and create a job for each object
jobs.forEach((jobData) => {
  const job = queue.create('push_notification_code_2', jobData).save((err) => {
    if (!err) {
      console.log(`Notification job created: ${job.id}`);

      // Event listeners for job events
      job.on('complete', () => {
        console.log(`Notification job ${job.id} completed`);
      });

      job.on('failed', (error) => {
        console.error(`Notification job ${job.id} failed: ${error.message}`);
      });

      job.on('progress', (progress) => {
        console.log(`Notification job ${job.id} ${progress}% complete`);
      });
    } else {
      console.error('Error creating job:', err);
    }
  });
});
