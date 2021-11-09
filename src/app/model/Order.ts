import {Supplier} from "./Supplier";
import {Services} from "./Service";

export interface Order{
  address?:string,
  supplier?:Supplier,
  services?:Services[],
  totalTime?:number,
  hourStart?:number,
  dayStart?:any,
  totalMoney?:number,
  statusOrder?:number,
  feedback?:string
}
