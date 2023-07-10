const UserID = 'user_id';
const FirstName = 'first_name';
const LastName = 'last_name';
const Email = 'email';
const Name = 'user';

export const User = {
  AllColumns: [UserID, FirstName, LastName, Email],
  UserID,
  FirstName,
  LastName,
  Email,
  Name,
};

export type PgUser = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
};
