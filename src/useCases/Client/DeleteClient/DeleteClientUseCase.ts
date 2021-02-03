import AppError from "@errors/AppError";
import { IClientRepository } from "@repositories/IClientRepository";
import { IDeleteClientRequestDTO } from "./IDeleteClientDTO";

export class DeleteClientUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}

  async execute({ id }: IDeleteClientRequestDTO): Promise<void> {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found', 404)
    }
    
    await this.clientRepository.delete(id);
  }
}