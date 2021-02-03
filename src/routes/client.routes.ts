import { Router } from 'express';
import { createClientController } from '@useCases/Client/CreateClient';
import { updateClientController } from '@useCases/Client/UpdateClient';
import { deleteClientController } from '@useCases/Client/DeleteClient';
import { listClientsController } from '@useCases/Client/ListClients';
import { listClientsPagController } from '@useCases/Client/ListClientsPaginated';
import { listClientsSearchController } from '@useCases/Client/ListClientsSearch';

import Authenticated from '@middlewares/Authenticated';

const clientRouter = Router();

clientRouter.use(Authenticated);

clientRouter.get('/', (request, response) => {
  listClientsController.handle(request, response);
});
clientRouter.get('/paginated', (request, response) => {
  listClientsPagController.handle(request, response);
});
clientRouter.get('/search', (request, response) => {
  listClientsSearchController.handle(request, response);
});

clientRouter.post('/', (request, response) => {
  createClientController.handle(request, response);
});
clientRouter.put('/:id', (request, response) => {
  updateClientController.handle(request, response);
});
clientRouter.delete('/:id', (request, response) => {
  deleteClientController.handle(request, response);
});

export { clientRouter };