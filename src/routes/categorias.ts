import express from 'express';
import { CategoriasController } from '../controllers/categoriasController';

const router = express.Router();

router.get('/categorias', CategoriasController.getCategoria);
router.post('/categorias', CategoriasController.createCategoria);
router.delete('/categorias/:id', CategoriasController.deleteCategoria);

export default router;