import { Client } from "@entities/Client";
import AppError from "@errors/AppError";
import { IClientRepository } from "@repositories/IClientRepository";
import { IUpdateClientRequestDTO } from "./IUpdateClientDTO";

export class UpdateClientUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}

  async execute({ id, name, email, telephone, cpf }: IUpdateClientRequestDTO): Promise<Client> {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found')
    }

    if (email !== client.email) {
      const verifyEmail = await this.clientRepository.findByEmail(email)

      if (verifyEmail) {
        throw new AppError('E-mail already used')
      }
    }

    client.name = name
    client.email = email
    client.telephone = telephone
    client.cpf = cpf

    await this.clientRepository.save(client);

    return client
  }
}