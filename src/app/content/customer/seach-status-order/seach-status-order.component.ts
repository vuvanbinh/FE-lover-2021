import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/Order";
import {OrderService} from "../../../service/order/order.service";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-seach-status-order',
  templateUrl: './seach-status-order.component.html',
  styleUrls: ['./seach-status-order.component.scss']
})
export class SeachStatusOrderComponent implements OnInit {
  status?: Order[] = [];
  isShowForm = false;
  constructor(private orderService: OrderService,private userService: UserService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.userService.getFindAll().subscribe(order => {
      this.status = order;
      console.log(order)
    })
  }

  getWait() {
    this.userService.getAllWait().subscribe(wait => {
      this.status = wait;
      console.log(wait)
    })
  }

  getAllAccomplished() {
    this.userService.getAllAccomplished().subscribe(accomplished => {
      this.status = accomplished;
      console.log(accomplished)
    })
  }

  getAllReceived() {
    this.userService.getAllReceived().subscribe(received => {
      this.status = received;
      console.log(received)
    })
  }



}
