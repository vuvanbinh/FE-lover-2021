import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {MatDialog} from "@angular/material/dialog";
import {LogoutDialogComponent} from "../../dialog/logout-dialog/logout-dialog.component";
import {UpdateAvatarComponent} from "../../content/user/update-avatar/update-avatar.component";

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
               private userService:UserService,
               private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log('111111111')
    if (window.localStorage.getItem('USER')&& window.localStorage.getItem('AVATAR')){
      console.log('222222222')
      this.checkLogin = true;
      console.log(this.checkLogin)
      this.username = JSON.parse(<string>window.localStorage.getItem('USER')).username;
      this.avatar = window.localStorage.getItem('AVATAR');
      this.role=this.userService.getRole();
    }

  }



  logOut() {
    const dialogRef = this.dialog.open(LogoutDialogComponent);
    dialogRef.afterClosed().subscribe(result=>{
      if (result){
        window.localStorage.clear();
        this.router.navigate(['home']);
        location.reload()
      }else {return}
    })


  }

  choose:boolean=false;
  updateAvatar() {
    this.choose=true
  }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateAvatarComponent);
    dialogRef.afterClosed().subscribe(result=>{
      this.avatar = window.localStorage.getItem('AVATAR');
    })
  }
}
