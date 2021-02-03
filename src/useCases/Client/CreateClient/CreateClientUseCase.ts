import { IClientRepository } from '@repositories/IClientRepository';
import { ICreateClientRequestDTO } from './ICreateClientDTO';
import { Client } from '@entities/Client';

export class CreateClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
  ) {}

  async execute({ name, email, telephone, cpf }: ICreateClientRequestDTO): Promise<Client> {
    const userAlreadyExists = await this.clientRepository.findByEmail(email);
    
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const client = await this.clientRepository.create({
      name,
      email,
      telephone, 
      cpf
    });

    return client;
  }
}