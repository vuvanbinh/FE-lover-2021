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


}
