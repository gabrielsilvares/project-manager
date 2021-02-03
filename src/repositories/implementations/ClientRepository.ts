import { getRepository, Raw } from "typeorm";

import { Client } from "@entities/Client";
import { IClientRepository } from "@repositories/IClientRepository";
import { ICreateClientRequestDTO } from "@useCases/Client/CreateClient/ICreateClientDTO";

export class ClientRepository implements IClientRepository {

  async save(client: Client): Promise<Client> {
    return await getRepository(Client).save(client);
  }

  async create({ name, email, telephone, cpf }: ICreateClientRequestDTO): Promise<Client> {
    const client = await getRepository(Client).create({ name, email, telephone, cpf });

    await getRepository(Client).save(client);

    return client;
  }

  async delete(id: string): Promise<void> {
    await getRepository(Client).delete(id);
  }

  async findAll(): Promise<Client[]> {
    return await getRepository(Client).find();
  }

  async findAllPaginated(page: number): Promise<[Client[], number]> {
    return await getRepository(Client).findAndCount({
      skip: page,
      take: 10,
    })
  }

  async findById(id: string): Promise<Client | undefined> {
    return await getRepository(Client).findOne({ where: { id } });
  }

  async findByName(name: string): Promise<Client[] | undefined> {
    return await getRepository(Client).find({ 
      where: { 
        name: Raw(alias => `${alias} ILIKE '%${name}%'`)
      }
    })
  }

  async findByEmail(email: string): Promise<Client | undefined> {
    const client = await getRepository(Client).findOne({ where: { email } });

    return client
  }
}