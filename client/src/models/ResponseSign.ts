import type  {User} from './User'


export interface ResponseSign {
    user: User;
    token : string;
}