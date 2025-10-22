export interface User{
    _id: string;
    username: string;
    password: string;
}

export type UserSansId = Omit<User, '_id'>;