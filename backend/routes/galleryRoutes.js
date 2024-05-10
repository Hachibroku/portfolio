import express from 'express';
import { Photo } from '../models/models.js';

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const photos = await Photo.find({});

        return response.status(200).json({
            count: photos.length,
            data: photos
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } =  request.params;

        const photo = await Photo.findById(id);

        return response.status(200).json(photo);
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
        const newPhoto = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const photo = await Photo.create(newPhoto);

        return response.status(201).send(photo)
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

        const result = await Photo.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Photo not found' });
        }

        return response.status(200).send({ message: 'Photo updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Photo.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Photo not found' });
        }

        return response.status(200).send({ message: 'Photo deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
