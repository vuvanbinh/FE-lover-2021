import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss']
})
export class UpdateAvatarComponent implements OnInit {

  id: any;
  avatar = '';
  status = '';

  constructor(private userService: UserService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.id = JSON.parse(<string>window.localStorage.getItem('USER')).id;
  }

  upLoadAvatar($event: string) {
    this.avatar = $event;
    this.status = '';
  }

  updateAvatar() {
    if (this.avatar == '') {
      this.status = 'Bạn chưa chọn ảnh, hãy nhấn vào Choose File để chọn một ảnh cho avatar '
      return;
    }
    console.log(this.id, this.avatar)
    this.userService.updateAvatar(this.id, this.avatar).subscribe(data => {
      if (JSON.stringify(data)===JSON.stringify({message:"Update success!"})){
        window.localStorage.setItem('AVATAR',this.avatar);
        this.status='Cập nhật ảnh thành công'
      }
    })
  }

}
