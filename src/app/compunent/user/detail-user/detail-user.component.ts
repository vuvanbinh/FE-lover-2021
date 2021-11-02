import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user/user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  userForm: FormGroup =new FormGroup({});
  id!: number ;
  users1: any = [];
  constructor(private userService: UserService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = paraMap.get('id');
      this.showEditUser(this.id);
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      avatar: new FormControl(),
    })

  }

  showEditUser(id: number) {
    this.userService.findByIdUser(id).subscribe(data => {
      this.users1 = data;
      this.userForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),


      })

    })
  }

}
