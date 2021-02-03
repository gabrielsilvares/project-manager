import { Client } from "@entities/Client";
import { IPaginated } from "src/interfaces/paginated";
import { IClientRepository } from "@repositories/IClientRepository";
import { IListClientPagRequestDTO } from "./IListClientsPagDTO";

export class ListClientsPagUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}

  async execute({ page }: IListClientPagRequestDTO): Promise<IPaginated<Client>> {
    const [clients, total] = await this.clientRepository.findAllPaginated(
      page * 10
    )

    const totalPages = Math.ceil(total / 10)

    const response: IPaginated<Client> = {
      data: clients,
      totalElements: total,
      page,
      elements: clients.length,
      elementsPerPage: 10,
      totalPages,
      firstPage: page === 0,
      lastPage: page === totalPages - 1,
    };

    return response
  }
}