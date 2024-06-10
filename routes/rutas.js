import { Router } from 'express';
import { createPostConstrollers, getPostControllers, getPostsByIdConstroller, updatePostControllers, deletePostControllers, getHtml } from '../src/likeme.controllers.js';

const router = Router()

router.get('/', getHtml)
router.post('/posts', createPostConstrollers)
router.get('/posts', getPostControllers)
router.get('/posts/:id', getPostsByIdConstroller)
router.put('/posts/likes:id', updatePostControllers)
router.delete('/posts/:id', deletePostControllers)

router.all('*', (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});


export default router;