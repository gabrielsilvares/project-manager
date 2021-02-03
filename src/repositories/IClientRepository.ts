import { Client } from '@entities/Client';
import { ICreateClientRequestDTO } from '@useCases/Client/CreateClient/ICreateClientDTO';

export interface IClientRepository {
  save(client: Client): Promise<Client>;
  create({ name, email, telephone, cpf }: ICreateClientRequestDTO): Promise<Client>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Client[]>;
  findAllPaginated(page: number): Promise<[Client[], number]>;
  findById(id: string): Promise<Client | undefined>;
  findByName(name: string): Promise<Client[]>;
  findByEmail(email: string): Promise<Client | undefined>;
}