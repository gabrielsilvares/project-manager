import { ClientRepository } from '@repositories/implementations/ClientRepository';
import { UpdateClientUseCase } from './UpdateClientUseCase';
import { UpdateClientController } from './UpdateClientController';

const clientRepository = new ClientRepository();

const updateClientUsecase = new UpdateClientUseCase(clientRepository);

const updateClientController = new UpdateClientController(updateClientUsecase);

export { updateClientController }