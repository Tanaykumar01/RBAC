import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
}))

app.use(express.static("public"));
app.use(cookieParser());

app.use(express.json({
    limit: '50mb'
}))

app.use(express.urlencoded({
    limit: '50mb',
    extended: true
}))

// import routes
import UserRouter from './routes/user.routes.js'


// use routes
app.use('/api/v1/user', UserRouter);

export {app};