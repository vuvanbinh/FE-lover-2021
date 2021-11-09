import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order/order.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../../model/Order";
import {MatDialog} from "@angular/material/dialog";
import {FeddbackDialogComponent} from "../../../dialog/feddback-dialog/feddback-dialog.component";

@Component({
  selector: 'app-oder-detail',
  templateUrl: './oder-detail.component.html',
  styleUrls: ['./oder-detail.component.scss']
})
export class OderDetailComponent implements OnInit {

  status='';
  order:any
  feedback: any;


  constructor(private orderService:OrderService,
              private activatedRoute:ActivatedRoute,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(orId=>{
      const id = parseInt(<string>orId.get('id'));
      this.getOrderById(id);
    })
  }

  getOrderById(id:number){
    this.orderService.findById(id).subscribe(data=>{
      this.order = data;
      this.feedback = data.feedback;
    })
  }

  changeFeedback() {
    this.orderService.changeFeedback(this.order.id,this.feedback).subscribe(data=>{
      if (JSON.stringify(data)===JSON.stringify({message:"Update success!"})){
        this.dialog.open(FeddbackDialogComponent);
      }
    })
  }


}
