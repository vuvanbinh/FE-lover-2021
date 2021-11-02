import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  name:any;
  avatar:any;
  checkLogin=false;

  constructor( private router:Router) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('TOKEN_KEY')){
      this.checkLogin = true;
      this.name = window.localStorage.getItem('NAME_KEY')
      this.avatar = window.localStorage.getItem('AVATAR_KEY');
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
