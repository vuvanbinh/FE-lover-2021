import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.scss']
})
export class AdminOrderDetailComponent implements OnInit {

  order:any;
  constructor(private orderService:OrderService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(orId=>{
      const id = parseInt(<string>orId.get('id'));
      this.getOrderById(id);
    })
  }

  getOrderById(id:number){
    this.orderService.findById(id).subscribe(data=>{
      this.order = data;
    })
  }

}
