import {Role} from "../role/role";

export interface User {
  id?:number;
  username?:string;
  password?:string;
  email?:string
  phoneNumber?:number;
  avatar?:string;
  joinDate?:number;
  status?:boolean;
  roles?:Role;

}
