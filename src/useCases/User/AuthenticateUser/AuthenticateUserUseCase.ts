import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@errors/AppError';

import { IUserRepository } from '@repositories/IUserRepository';
import { IAuthenticateUserRequestDTO, IAuthenticateUserResponseDTO } from './IAuthenticateUserDTO';

import { IHashProvider } from '@providers/IHashProvider';

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider
  ) {}

  async execute({ email, password }: IAuthenticateUserRequestDTO): Promise<IAuthenticateUserResponseDTO> {
    const user = await this.userRepository.findByEmail(email);
    
    if (!user) {
      throw new AppError('E-mail/senha incorretos', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password, 
      user.password
    );

    if (!passwordMatched) {
      throw new AppError('E-mail/senha incorretos', 401);
    }

    if (!user.active) {
      throw new AppError('Usuário inativo', 401); 
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })
    
    return {
      user,
      token
    };
  }
}