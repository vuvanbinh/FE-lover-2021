import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Supplier} from "../../model/supplier/supplier";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private API_SUPPLIER = environment.API_LOCAL+'suppliers';

  constructor(private http:HttpClient) { }

  getTop6View(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.API_SUPPLIER + `/top6` );
  }
  findById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.API_SUPPLIER}/${id}`);
  }

  getCount(id:any): Observable<Supplier[]> {
    return  this.http.get<Supplier[]>(this.API_SUPPLIER+ `/count`+`/${id}`);
  }
}
