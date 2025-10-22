
export interface Signup {
  username: string;
  password: string;
}
export interface Signin {
  username: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
}

export interface Reponse {
  user: User;
  token: string;
}