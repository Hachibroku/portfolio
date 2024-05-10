import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const gallerySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        caption: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            required: true,
        },
        images: {
            type: [String],
            required: true,
        },
        blurb: {
            type: String,
            required: true,
        }
    }
)

export const BlogPost = mongoose.model('BlogPost', blogSchema)
export const Photo = mongoose.model('Photo', gallerySchema)
export const Project = mongoose.model('Project', projectSchema)
