import { uuid } from 'uuidv4';
import { CreateUserRequest } from '../../controllers';
import { User } from '../../store';

export function toUser(u: CreateUserRequest): User {
  return {
    userID: uuid(),
    firstName: u.firstName,
    lastName: u.lastName,
    email: u.email,
  };
}