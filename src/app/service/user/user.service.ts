import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../../model/SignInForm";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_SIGNIN = environment.API_LOCAL+'auth/signIn';
  private API_SIGNUP = environment.API_LOCAL+'auth/signUp';
  constructor(private http: HttpClient,
              ) { }

  signUp(signUp: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignInForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNIN, signIn);
  }



}
