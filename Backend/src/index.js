import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB  from './db/index.js';

// Load environment variables from .env file
dotenv.config({
    path : './.env'
});

// Start the server
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("error :- ", error);
    process.exit(1);
})


