import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Services} from "../../model/Service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private API_SERVICES= environment.API_LOCAL+'services'
  constructor(private http:HttpClient) { }

  create(services:Services):Observable<any>{
    return this.http.post<any>(this.API_SERVICES,services);
  }

  changePriceById(id:number,price:number):Observable<any>{
    return this.http.put<any>(`${this.API_SERVICES}/changePriceById/${id}?price=${price}`,id);
  }


}
