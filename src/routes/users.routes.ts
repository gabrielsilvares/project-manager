import { Router } from 'express';
import { createUserController } from '@useCases/User/CreateUser';
import { enableUserController } from '@useCases/User/EnableUser';

import Authenticated from '@middlewares/Authenticated';

const usersRouter = Router();

usersRouter.use(Authenticated);

usersRouter.post('/', async (request, response) => createUserController.handle(request, response));
usersRouter.post('/:id', async (request, response) => enableUserController.handle(request, response));

export { usersRouter };