import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  username:any;
  avatar:any;
  checkLogin=false;
  role:any;

  constructor( private router:Router,
               private userService:UserService) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('USER')){
      this.checkLogin = true;
      this.username = JSON.parse(<string>window.localStorage.getItem('USER')).username;
      this.avatar = JSON.parse(<string>window.localStorage.getItem('USER')).avatar;
      this.role=this.userService.getRole();
    }

  }

  logOut() {
    if (confirm("Bạn muốn thoát đăng nhập?.")) {
      window.localStorage.clear();
      this.router.navigate(['home']);
      location.reload()
    }
  }

}
