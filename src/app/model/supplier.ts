import {Image} from "./image";
import {User} from "./user";

export interface Supplier {
  id?:number
  name?:string
  yearOfBirth?:number
  sex?:string
  city?:string
  country?:string
  images?: Image
  height?:number
  weight?:number
  interests?:string
  description?:string
  requirements?:string
  linkFB?:string
  count?:number
  activeStatus?:boolean
  user?:User
}
