import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../model/Supplier";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogComponent} from "../../../dialog/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.scss']
})
export class DetailSupplierComponent implements OnInit {
  checkLogin: boolean=false;
  supplier:any;
  changeImage?:HTMLImageElement;
  role:any;

  constructor(private supplierService:SupplierService,
              private activatedRoute:ActivatedRoute,
              private dialog:MatDialog,
              private router: Router,
              private userService:UserService) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('USER')){
      this.checkLogin=true;
      this.role = this.userService.getRole();
    }
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.router.navigate(['login'])
      }
    });
  }

}
