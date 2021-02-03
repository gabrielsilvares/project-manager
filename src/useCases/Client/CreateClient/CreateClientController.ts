import { CreateClientUseCase } from './CreateClientUseCase';
import { Request, Response } from 'express';

export class CreateClientController {
  constructor(
    private createClientUseCase: CreateClientUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, telephone, cpf } = request.body;

    try {
      const client = await this.createClientUseCase.execute({ name, email, telephone, cpf })

      return response.status(201).send({client});
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}