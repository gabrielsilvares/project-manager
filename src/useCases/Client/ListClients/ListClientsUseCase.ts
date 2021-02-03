import { Client } from "@entities/Client";
import { IClientRepository } from "@repositories/IClientRepository";

export class ListClientsUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}  

  async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll();

    return clients;
  }
}