import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  constructor(
    private updateClientUseCase: UpdateClientUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, telephone, cpf} = request.body;

    try {
      const client = await this.updateClientUseCase.execute({
        id,
        name, 
        email, 
        telephone,
        cpf
      })

      return response.status(200).send({client})
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}