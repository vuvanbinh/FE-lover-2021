import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {SignInForm} from "../../model/signIn/SignInForm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sigInForm:SignInForm={}
  status= '';
  hide= true;

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {

  }

  message={message:"no"}
  ngSubmit() {
    this.userService.signIn(this.sigInForm).subscribe(data=>{
      if (JSON.stringify(data)===JSON.stringify(this.message)){
        this.status='Sai tên đăng nhập hoặc mật khẩu mời nhập lại'
      }else {
        window.localStorage.setItem('TOKEN_KEY',data.token);
        window.localStorage.setItem('ID_KEY',data.id);
        window.localStorage.setItem('NAME_KEY',data.name);
        window.localStorage.setItem('EMAIL_KEY',data.email);
        window.localStorage.setItem('AVATAR_KEY',data.avatar);
        console.log(" Dang nhap thanh cong");
        this.router.navigate(['home']).then(()=>{
          location.reload()
        })
      }
    })
  }
}
