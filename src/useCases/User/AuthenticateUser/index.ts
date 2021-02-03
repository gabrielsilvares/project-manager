import { UserRepository } from '@repositories/implementations/UserRepository';
import { HashProvider } from '@providers/implementations/HashProvider';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { AuthenticateUserController } from './AuthenticateUserController';

const userRepository = new UserRepository();

const hashProvider = new HashProvider()

const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, hashProvider);

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController }