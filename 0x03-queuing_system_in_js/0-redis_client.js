import  { createClient } from 'redis'

console.log('Attempting to connect to Redis...');

const client  = createClient();

client.connect()
  .then(() => {
    console.log("Redis client connected to the server");
  })
  .catch((err) => {
    console.error("Redis client not connected to the server:", err)
  })
  