import express from 'express';
import  { AutoresController } from '../controllers/autoresController';

const router = express.Router();

router.get('/autores', AutoresController.getAutor);
router.post('/autores', AutoresController.createAutor);
router.delete('/autores/:id', AutoresController.deleteAutor);

export default router;