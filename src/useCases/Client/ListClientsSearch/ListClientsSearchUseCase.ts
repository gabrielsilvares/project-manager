import { Client } from "@entities/Client";
import { ClientRepository } from "@repositories/implementations/ClientRepository";
import { IListClientsSearchRequestDTO } from "./IListClientsSearchDTO";

export class ListClientsSearchUseCase {
  constructor(
    private clientRepository: ClientRepository
  ) {}

  async execute({ name }: IListClientsSearchRequestDTO): Promise<Client[] | undefined> {
    const clients = await this.clientRepository.findByName(name);

    return clients;
  }
}