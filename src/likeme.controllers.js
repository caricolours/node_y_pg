import { updatePostModel, deletePostModel, getPostsModel, createPostModel } from '../src/likeme.models.js';
import path from 'path'

export const getHtml = (req, res) => {
    const filePath = path.resolve('../EJERCICIO3/src/app.jsx')
    res.sendFile(filePath)
}

export const getPostControllers = async (req, res) => {
    try {
        const post = await getPostsModel();
        res.status(200).json({ post: post });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const createPostConstrollers = async (req, res) => {
    try {
const {post} = req.body
const posts = await createPostModel();
const postexists = posts.find((p) => p.titulo === posts.titulo);
if(postexists) {
    return res.status(409).json({error: 'Este post ya existe'});
}
const newPost = await createPostModel(post);
res.status(201).json({post: newPost});
    } catch (error) {
res.status(500).json({error: error.message})
    }
}

export const updatePostControllers = async (req, res) => {
    try {
        const { id } = req.params;  
        const { titulo } = req.body;
        const posts = await updatePostModel(id, titulo);
        res.status(200).json({ posts: posts });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export const deletePostControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await deletePostModel(id);
        if (posts === 0) {
            res.status(404).json({ error: 'Post not found' });
        }
        res.status(204).json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export const getPostsByIdConstroller = async (req, res) => {
    try {
        const { id } = res.params;
        const posts = await getPostsByIdModel(id)
        if (posts.length === 0) {
            return res.status(404).json({ error: 'Post not Found' })

        }  
        res.status(200).json({posts: posts})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}