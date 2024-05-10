import express from "express";
import { PORT, MongoDBURL } from "./config.js"
import mongoose from "mongoose"
import blogRoutes from './routes/blogRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import cors from 'cors';

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))

app.get('/', (request, response) => {
    console.log(request)
    return response.status(200).send('Welcome To MERN Stack')
});

app.use('/blog', blogRoutes);

app.use('/gallery', galleryRoutes)

app.use('/projects', projectRoutes)

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })
