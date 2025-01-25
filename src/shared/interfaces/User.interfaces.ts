export interface UserState {
  isAuth: boolean;
  username: string;
  avatar?: string;
  password: string;
}

export type UserHeaderData = Pick<UserState, 'username' | 'avatar'>;

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}
