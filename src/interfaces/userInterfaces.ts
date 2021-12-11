export interface UserInterface {
  name: string;
  class: string;
}

export interface UserWithId extends UserInterface {
  id: string;
}

export interface UserToken {
  token: string
}
