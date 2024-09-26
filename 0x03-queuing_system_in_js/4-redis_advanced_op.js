import { createClient } from 'redis';

const client = createClient();

// Handle connection events
client.on('connect', () => {
    console.log("Redis client connected to the server");
});

client.on("error", (err) => {
    console.error("Redis client not connected to the server:", err);
});

// Function to create a hash
const createHash = async () => {
    try {
        // Set multiple fields in the hash using hSet
        await client.hSet('HolbertonSchools', 'Portland', 50);
        await client.hSet('HolbertonSchools', 'Seattle', 80);
        await client.hSet('HolbertonSchools', 'New York', 20);
        await client.hSet('HolbertonSchools', 'Bogota', 20);
        await client.hSet('HolbertonSchools', 'Cali', 40);
        await client.hSet('HolbertonSchools', 'Paris', 2);
        console.log("Hash created successfully");
    } catch (err) {
        console.error("Error creating hash:", err);
    }
};

// Function to display the hash
const displayHash = async () => {
    try {
        const obj = await client.hGetAll('HolbertonSchools');
        console.log(obj);
    } catch (err) {
        console.error("Error retrieving hash:", err);
    }
};

// Main function to run the operations
const run = async () => {
    await client.connect(); // Connect to the Redis server

    await createHash(); // Create the hash
    await displayHash(); // Display the hash

    await client.quit(); // Close the Redis client
};

// Execute the main function
run();
