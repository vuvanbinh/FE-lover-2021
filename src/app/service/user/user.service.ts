import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  API_URL = `${environment.apiUrl}`;

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL );
  }

  findByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }
  findUserByStatus():Observable<User[]> {
    return this.http.get<User[]>(this.API_URL+`/status`)
  }
}
