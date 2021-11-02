import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
 users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.userService.findUserByStatus().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}
