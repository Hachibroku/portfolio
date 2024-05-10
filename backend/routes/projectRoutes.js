import express from 'express';
import { Project } from '../models/models.js';

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const projects = await Project.find({});

        return response.status(200).json({
            count: projects.length,
            data: projects
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } =  request.params;

        const project = await Project.findById(id);

        return response.status(200).json(project);
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
        const newProject = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const project = await Project.create(newProject);

        return response.status(201).send(project)
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

        const result = await Project.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Project not found' });
        }

        return response.status(200).send({ message: 'Project updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Project.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Project not found' });
        }

        return response.status(200).send({ message: 'Project deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
