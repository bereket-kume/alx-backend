import { createClient } from 'redis';

const client = createClient();

// Handle connection events
client.on('error', (err) => {
    console.error('Redis client not connected to the server:', err);
});

// Async function to handle all Redis operations
const runRedisCommands = async () => {
    try {
        // Connect to the Redis server
        await client.connect();

        console.log('Redis client connected to the server');

        // Function to set a key-value pair
        const setNewSchool = async (schoolName, value) => {
            await client.set(schoolName, value);
            console.log(`Set ${schoolName} with value ${value}`);
        };

        // Function to get a value based on key
        const displaySchoolValue = async (schoolName) => {
            const value = await client.get(schoolName);
            console.log(`${schoolName}: ${value}`);
        };

        // Main Redis operations
        await displaySchoolValue('Holberton'); // This key may not exist initially
        await setNewSchool('HolbertonSanFrancisco', '100');
        await displaySchoolValue('HolbertonSanFrancisco');

    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Quit the client when all operations are done
        await client.quit();
        console.log('Redis client closed');
    }
};

// Execute the Redis commands
runRedisCommands();
