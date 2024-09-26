import { createClient } from 'redis';

const client = createClient();

// Handle connection events
client.on('connect', () => {
    console.log("Redis client connected to the server");
});

client.on('error', (err) => {
    console.error("Redis client not connected to the server:", err);
});

// Async function to handle Redis operations
const runRedisCommands = async () => {
    try {
        // Connect to the Redis server
        await client.connect();

        // Set a key-value pair
        const setNewSchool = async (schoolName, value) => {
            await client.set(schoolName, value);
            console.log(`Set ${schoolName} with value ${value}`);
        };

        // Get a value from Redis
        const displaySchoolValue = async (schoolName) => {
            const value = await client.get(schoolName);
            console.log(`${schoolName}: ${value}`);
        };

        // Perform Redis operations
        await displaySchoolValue('Holberton'); // This might be empty if not set before
        await setNewSchool('HolbertonSanFrancisco', '100');
        await displaySchoolValue('HolbertonSanFrancisco');

    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Properly close the client connection
        await client.quit();
        console.log('Redis client closed');
    }
};

// Execute Redis commands
runRedisCommands();
