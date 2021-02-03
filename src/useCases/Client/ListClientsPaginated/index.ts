import { ClientRepository } from '@repositories/implementations/ClientRepository';
import { ListClientsPagUseCase } from './ListClientsPagUseCase';
import { ListClientsPagController } from './ListClientsPagController';

const clientRepository = new ClientRepository();

const listClientsPagUsecase = new ListClientsPagUseCase(clientRepository);

const listClientsPagController = new ListClientsPagController(listClientsPagUsecase);

export { listClientsPagController }