import { table, PgUser } from '../../postgres/table';

export type User = {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
};

export function toPgUser(user: User) {
  return {
    [`${table.User.UserID}`]: user.userID,
    [`${table.User.FirstName}`]: user.firstName,
    [`${table.User.LastName}`]: user.lastName,
    [`${table.User.Email}`]: user.email,
  };
}

export function fromPgUser(pgUser: PgUser): User {
  return {
    userID: pgUser.user_id,
    firstName: pgUser.first_name,
    lastName: pgUser.last_name,
    email: pgUser.email,
  };
}
