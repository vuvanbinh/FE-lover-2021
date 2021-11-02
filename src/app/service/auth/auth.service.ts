import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SignInForm} from "../../model/sign-in-form";
import {SignUpForm} from "../../model/sign-up-form";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOGIN + '/signup';
  private API_SIGNIN = environment.API_LOGIN + '/signin';

  constructor(private http: HttpClient) {
  }

  signUp(signUp: SignUpForm): Observable<any> {
    return this.http.post(this.API_SIGNUP, signUp)
  }

  signIn(user: SignInForm): Observable<any> {

    const header = {
      Authorization: localStorage.getItem("token")

    }
    // @ts-ignore
    return this.http.post(this.API_SIGNIN, user, header);
  }
}
