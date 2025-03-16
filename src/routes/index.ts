import express, { Express } from "express";
import user from './user';
import authenticate from './authenticate';
import livros from './livros';
import autores from './autores';
import categorias from './categorias'

const routes = (app: Express) => {
  app.use(express.json(), user, authenticate, livros, categorias, autores);
};

export default routes;