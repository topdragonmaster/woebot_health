export interface IPassword {
  upperCase: boolean;
  lowerCase: boolean;
  number: boolean;
  specialChr: boolean;
  length: boolean;
}

export interface IBaseUser {
  username: string;
  password: string;
}

export interface IUser extends IBaseUser {
  id: string;
}

export interface IPostResponse {
  id: string;
  username: string;
  password: string;
}