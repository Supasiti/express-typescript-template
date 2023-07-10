export type CreateUserRequest = {
  firstName: string;
  lastName: string;
  email: string;
};

export type UserResponse = {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
};
