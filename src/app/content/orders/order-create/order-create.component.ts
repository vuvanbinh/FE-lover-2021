import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {Order} from "../../../model/Order";
import {FormControl} from "@angular/forms";
import {OrderService} from "../../../service/order/order.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../dialog/dialog/dialog.component";
import {OrderSuccessDialogComponent} from "../../../dialog/order-success-dialog/order-success-dialog.component";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {
  status= '';
  toppings = new FormControl();
  supplier: any;
  order: Order = {};
  times: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


  constructor(private supplierService: SupplierService,
              private activatedRoute: ActivatedRoute,
              private oderService:OrderService,
              private dialog: MatDialog,
              ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(supId => {
      const id = parseInt(<string>supId.get('id'));
      this.getSupplier(id);
    })
  }

  getSupplier(id: number) {
    this.supplierService.findById(id).subscribe(data => {
      this.supplier = data;
      this.order.supplier = data;
    })
  }


  sum:any=0;


  calculate() {
    let ser = this.order.services;
    if (ser) {
      for (let i = 0; i < ser.length; i++) {
        if (ser[i].price) {
          this.sum += ser[i].price
          console.log(this.sum)
        }
      }
    }
    if (this.order.totalTime) {
      this.order.totalMoney = this.order.totalTime * this.sum;
      console.log(this.order.totalMoney)
    }
  }

  createOrder() {
    console.log(this.order)
    this.oderService.create(this.order).subscribe(data=>{
      if (JSON.stringify(data)===JSON.stringify({message:"Create success!"})){
        this.dialog.open(OrderSuccessDialogComponent);
      }
    })
  }


}
