import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
  constructor(
    private deleteClientUseCase: DeleteClientUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.deleteClientUseCase.execute({ id })
      
      return response.status(204).send();
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}