import { ClientRepository } from '@repositories/implementations/ClientRepository';
import { ListClientsUseCase } from './ListClientsUseCase';
import { ListClientsController } from './ListClientsController';

const clientRepository = new ClientRepository();

const listClientsUsecase = new ListClientsUseCase(clientRepository);

const listClientsController = new ListClientsController(listClientsUsecase);

export { listClientsController }