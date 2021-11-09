import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Supplier} from "../../model/supplier";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  API = `${environment.API_LOCAL}`;

  constructor(private httpClient: HttpClient) {
  }

  saveSupplier(supplier: Supplier): Observable<Supplier> {
    return this.httpClient.post<Supplier>(this.API ,supplier );
  }

  updateSupplier(id: number, supplier: Supplier): Observable<Supplier> {
    return this.httpClient.put<Supplier>(`${this.API}${id}`, supplier);
  }

}
