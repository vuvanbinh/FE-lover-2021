import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../model/Supplier";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.scss']
})
export class DetailSupplierComponent implements OnInit {
  supplier:any;
  changeImage?:HTMLImageElement;

  constructor(private supplierService:SupplierService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(supId=>{
      const id = parseInt(<string>supId.get('id'));
      this.getSupplier(id);
    })
  }


  getSupplier(id:number){
    this.supplierService.findById(id).subscribe(data=>{
      this.supplier=data;
     this.changeImage= this.supplier.user.avatar
      console.log( '111111111',this.supplier);
    })
  }


  changeAvatar(img: HTMLImageElement) {
    this.changeImage=img;
  }
}
