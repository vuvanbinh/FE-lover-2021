import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../../model/SignInForm";
import {Order} from "../../model/Order";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_USERS = environment.API_LOCAL+'users';
  private API_SIGNIN = environment.API_LOCAL+'auth/signIn';
  private API_SIGNUP = environment.API_LOCAL+'auth/signUp';
  constructor(private http: HttpClient,
              ) { }

  getRole():any{
    let roles = JSON.parse(<string>window.localStorage.getItem('USER')).roles;
    console.log(roles[0].authority)
    return roles[0].authority
  }

  signUp(signUp: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignInForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNIN, signIn);
  }

  finAllUser():Observable<any>{
    return this.http.get<any>(this.API_USERS);
  }

  blockAccount(id:number):Observable<any>{
    return this.http.post<any>(this.API_USERS+'/block/'+id,id);
  }
  getFindAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_USERS+ `/allOrder`)
  }

  getAllAccomplished(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_USERS+ `/accomplished`)
  }

  getAllWait(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_USERS+ `/wait`)
  }

  getAllReceived(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_USERS+ `/received`)
  }

}
