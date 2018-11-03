import { Get, JsonController } from "routing-controllers";
import { getConnectionManager, Repository } from 'typeorm';
import User from '../entities/User';
import { deserializeUser, serializeUsers } from '../serializers/UserSerializer';

@JsonController()
export class UserController {
  private readonly userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnectionManager().get().getRepository(User);
  }

  @Get("/users")
  async getAll() {
    const users = await this.userRepository.find();
    debugger;
    return serializeUsers(users);
  }
}
