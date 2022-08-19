export interface InfoUser {
  isAuthorized: boolean;
  message: string;
  token: string;
  user: IUser | null;
}

export interface IUser {
  _id: string;
  username: string;
}
