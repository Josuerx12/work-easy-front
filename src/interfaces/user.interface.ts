/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUser {
  id: string;
  avatarId?: string;
  name: string;
  email: string;
  admin: boolean;
  moderator: boolean;
  support: boolean;
  avatar?: any;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type LoginCredentials = {
  email: string;
  password: string;
};
