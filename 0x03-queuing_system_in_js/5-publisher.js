import { createClient } from 'redis';

const client = createClient();

client.on("connect", () => {
    console.log("Redis client connected to the server");
});

client.on("error", (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
});

// Example function with proper error handling
const publishMessage = async (message, time) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, time)); // Delay
        console.log(`About to send message: ${message}`);
        client.publish("holberton school channel", message);
    } catch (error) {
        console.error(`Error publishing message: ${error}`);
    }
};

// Call publishMessage function
publishMessage("Example message", 100);
