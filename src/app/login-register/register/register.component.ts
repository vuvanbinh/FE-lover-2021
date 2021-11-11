import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SignUpForm} from "../../model/SignUpForm";
import {UserService} from "../../service/user/user.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterSuccessComponent} from "../../dialog/register-success/register-success.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sigUpForm:SignUpForm={}
  status= '';
  hide= true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  constructor(private userService:UserService,
              private dialog:MatDialog,
              private router:Router) { }

  ngOnInit(): void {
  }

  message:any={message:"Username is existed!"}
  message1:any={message:"Email is existed!"}
  pass: any;
  ngSubmit() {
    if (this.sigUpForm.password!=this.pass){
      this.status='Nhập lại mật khẩu không đúng'
      return;
    }
    this.sigUpForm.avatar='https://firebasestorage.googleapis.com/v0/b/vubinh-84277.appspot.com/o/download.png?alt=media&token=3dbee61a-2e0e-4e66-9316-f7ec88b90bef';
    this.sigUpForm.joinDate= new Date();
    this.sigUpForm.roles=['user'];
    this.sigUpForm.isConfirm= false;
    console.log(this.sigUpForm)
    this.userService.signUp(this.sigUpForm).subscribe(data=>{
      switch (JSON.stringify(data)){
        case JSON.stringify(this.message):
          this.status='Tên đắng nhập đã tồn tại, mời nhập tên khác vào';
          break
        case JSON.stringify(this.message1):
          this.status='Email đã tồn tại, mời nhập email khác vào';
          break
        default:
          this.dialog.open(RegisterSuccessComponent).afterClosed().subscribe(result=>{
            if (result){
              this.router.navigate(['login'])
            }else {
              return;
            }
          })
      }
    })
  }

}
