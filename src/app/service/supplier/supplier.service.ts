import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Supplier} from "../../model/Supplier";
import {Observable} from "rxjs";
import {Search} from "../../model/Search";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private API_SUPPLIER = environment.API_LOCAL+'suppliers'
  private API_SUPPLIER_FIND_ALL_BY_CONFIRM = environment.API_LOCAL+'suppliers/pageFindAllByIsConfirmAndActive'
  constructor(private http:HttpClient) { }

  findAll():Observable<any>{
    return this.http.get<any>(this.API_SUPPLIER)
  }

  findAllSupplierByIsConfirm():Observable<any>{
    return this.http.get<any>(this.API_SUPPLIER_FIND_ALL_BY_CONFIRM+'/'+false+'/'+false)
  }

  pageFindAll(pageSize?:any):Observable<any>{
    const params = pageSize;
    return this.http.get<any>(this.API_SUPPLIER_FIND_ALL_BY_CONFIRM+'/'+true+'/'+true,{params});//{params} thuộc về hàm get của angular}
  }


  findById(id: number):Observable<Supplier>{
    return this.http.get<Supplier>(`${this.API_SUPPLIER}/${id}`)
  }

  create(supplier:Supplier):Observable<any>{
    return this.http.post<any>(this.API_SUPPLIER,supplier);
  }



  changeIsConfirm(id:number):Observable<any>{
    return this.http.post<any>(this.API_SUPPLIER+'/changeIsConfirm/'+id,id);
  }

  findByUser():Observable<any>{
    return this.http.get<any>(this.API_SUPPLIER+'/findByUser')
  }

  changeIsActive(id: number):Observable<Supplier>{
    return this.http.post<Supplier>(`${this.API_SUPPLIER}/changeIsActive/${id}`,id)
  }

  search(search:Search):Observable<any>{
    return this.http.post<any>(this.API_SUPPLIER+'/search',search);
  }

  top6():Observable<any> {
    return this.http.get<any>(this.API_SUPPLIER +'/top6');
  }

}
