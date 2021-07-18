import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

/**
 * Tipos de parametros(trabalhando com requisições)
 * Route Params => parametros de rotas
 * http://localhost:3333/settings/1 <- parametros que vêm na própria rota
 * Query Params => filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa&blabla
 * Body params =>  usado para fazer inserções dentro da requisição (usa-se formato json)
 * {
 * 
 * }
 */
  
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);



export {routes};

