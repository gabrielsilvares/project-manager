import { Request, Response } from "express";
import { ListClientsSearchUseCase } from "./ListClientsSearchUseCase";

export class ListClientsSearchController {
  constructor(
    private listClientsSearchUseCase: ListClientsSearchUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name } = request.query;

    try {
      const clients = await this.listClientsSearchUseCase.execute({ name: name.toString() || '' });

      return response.status(200).send({clients})
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}