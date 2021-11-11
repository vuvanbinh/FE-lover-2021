import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Order} from "../../model/Order";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_ORDER = environment.API_LOCAL+'orders'
  constructor(private http:HttpClient) { }

  create(order:Order):Observable<any>{
    return this.http.post<any>(this.API_ORDER,order);
  }

  findAllBySupplier(id:number){
    return this.http.get<any>(this.API_ORDER+'/findAllBySupplier/'+id);
  }

  findAllByUser(){
    return this.http.get<any>(this.API_ORDER+'/findAllByUser')
  }

  findById(id:number){
    return this.http.get<any>(this.API_ORDER+'/'+id)
  }

  changeFeedback(id:number,feedback:any){
    return this.http.put<any>(`${this.API_ORDER}/feedback/${id}?feedback=`+feedback,feedback);
  }

  changeOrderStatus(id:number){
    return this.http.put<any>(`${this.API_ORDER}/changeOrderStatus/${id}`,id);
  }

  findAll():Observable<any>{
    return this.http.get<any>(this.API_ORDER);
  }



}
