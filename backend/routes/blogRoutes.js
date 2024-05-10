import express from 'express';
import { BlogPost } from '../models/models.js';

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const blogPosts = await BlogPost.find({});

        return response.status(200).json({
            count: blogPosts.length,
            data: blogPosts
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } =  request.params;

        const blogPost = await BlogPost.findById(id);

        return response.status(200).json(blogPost);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Please enter all required fields: title, author, publish year',
            });
        }
        const newBlogPost = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const blogPost = await BlogPost.create(newBlogPost);

        return response.status(201).send(blogPost)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Please enter all required fields: title, author, publish year',
            });
        }

        const { id } = request.params

        const result = await BlogPost.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'BlogPost not found' });
        }

        return response.status(200).send({ message: 'BlogPost updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await BlogPost.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'BlogPost not found' });
        }

        return response.status(200).send({ message: 'BlogPost deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
