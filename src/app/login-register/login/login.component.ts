import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {SignInForm} from "../../model/SignInForm";
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
        window.localStorage.setItem('USER',JSON.stringify(data))
        if (this.userService.getRole()=='ADMIN'){
          this.router.navigate(['/admin'])
        }else {
          this.router.navigate(['']).then(()=>{
            location.reload()
          })
        }
      }
    })
  }
}
