import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../model/Supplier";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  supplier:Supplier = {};
  status='';
  images:Array<String>=[]

  constructor(private supplierService:SupplierService,
              private router:Router) { }

  ngOnInit(): void {
    if (!window.localStorage.getItem('USER')){
      alert("Bạn cần đăng nhập để trở thành người cung cấp dịch vụ.");
      this.router.navigate(['']);
    }
  }

  message={message:"Create success!"}
  ngSubmit() {
    this.supplier.images = this.images;
    this.supplierService.create(this.supplier).subscribe(data=>{
      if (JSON.stringify(data)===JSON.stringify(this.message)){
        this.status='Đăng ký thông tin cá nhân thành công!';
      }
    })
  }

  upLoadAvatar($event: string) {
    this.images.push($event)
    console.log(this.images)
  }

  checkLogin(){

  }

}
