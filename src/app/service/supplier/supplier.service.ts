import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Supplier} from "../../model/Supplier";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private API_SUPPLIER = environment.API_LOCAL+'suppliers'
  private API_SUPPLIER_FIND_ALL_BY_CONFIRM = environment.API_LOCAL+'suppliers/pageFindAllByIsConfirm'
  constructor(private http:HttpClient) { }

  findById(id: number):Observable<Supplier>{
    return this.http.get<Supplier>(`${this.API_SUPPLIER}/${id}`)
  }

  create(supplier:Supplier):Observable<any>{
    return this.http.post<any>(this.API_SUPPLIER,supplier);
  }

  pageFindAll(pageSize?:any):Observable<any>{
    const params = pageSize;
    return this.http.get<any>(this.API_SUPPLIER_FIND_ALL_BY_CONFIRM,{params});//{params} thuộc về hàm get của angular}
  }



}
