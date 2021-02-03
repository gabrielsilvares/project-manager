import { Router } from 'express';
import { usersRouter } from './users.routes';
import { authRouter } from './auth.routes';
import { clientRouter } from './client.routes';

const routes = Router();
const prefixRoutes = '/api/v1'

routes.use(`${prefixRoutes}/users`, usersRouter);
routes.use(`${prefixRoutes}/auth`, authRouter);
routes.use(`${prefixRoutes}/client`, clientRouter);

export default routes;
