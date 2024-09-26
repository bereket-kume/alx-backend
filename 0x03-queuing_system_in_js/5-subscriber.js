// 5-subscriber.js
import { createClient } from 'redis';

const client = createClient();

client.on("connect", () => {
    console.log("Redis client connected to the server");
});

client.on("error", (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
});

// Subscribe to the channel
client.subscribe("holberton school channel");

client.on('message', (channel, message) => {
    console.log(`Received message: ${message} from channel: ${channel}`);
    
    if (message === 'KILL_SERVER') {
        client.unsubscribe("holberton school channel");
        client.quit();
    }
});
