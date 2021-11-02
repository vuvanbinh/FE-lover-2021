import {User} from "./user";

export interface Services {
  id?:number;
  number?:string;
  serviceType?:string;
  price?:number;
  user?:User;
}
