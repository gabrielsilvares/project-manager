import { ClientRepository } from "@repositories/implementations/ClientRepository";
import { ListClientsSearchUseCase } from "./ListClientsSearchUseCase";
import { ListClientsSearchController } from "./ListCllientsSearchController";

const clientRepository = new ClientRepository();

const listClientsSearchUseCase = new ListClientsSearchUseCase(clientRepository);

const listClientsSearchController = new ListClientsSearchController(listClientsSearchUseCase);

export { listClientsSearchController }
