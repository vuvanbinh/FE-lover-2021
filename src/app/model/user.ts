import {Role} from "./role";
import {Image} from "./image";

export interface User {
  id?:number;
  name?:string;
  username?:string;
  password?:string;
  email?:string;
  phoneNumber?:number;
  address?:string;
  avatar?:string;
  joinDate?:number;
  status?:boolean;
  yearOfBirth?:number;
  sex?:string;
  country?:string;
  city?:string;
  height?:number;
  weight?:number;
  interests?:string;
  description?:string;
  requirements?:string;
  linkFB?:string;
  count?:number
  roles?:Role;
  images?:Image;
}
