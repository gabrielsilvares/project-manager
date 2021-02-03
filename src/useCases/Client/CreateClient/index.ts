import { ClientRepository } from '@repositories/implementations/ClientRepository';
import { CreateClientUseCase } from './CreateClientUseCase';
import { CreateClientController } from './CreateClientController';

const clientRepository = new ClientRepository();

const createClientUsecase = new CreateClientUseCase(clientRepository);

const createClientController = new CreateClientController(createClientUsecase);

export { createClientController }