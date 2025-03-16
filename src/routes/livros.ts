import express from 'express';
import { LivrosController } from '../controllers/livrosController';

const router = express.Router();

router.get('/livros', LivrosController.getLivro);
router.post('/livros', LivrosController.createLivro);
router.delete('/livros/:id', LivrosController.deleteLivros);

export default router;