import { Component, OnInit } from '@angular/core';
import {SupplierService} from "../../service/supplier/supplier.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  suppliers:any;
  totalElements?:number=0;

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.pageFindAll({page:0 ,size:12})
  }

  pageFindAll(pageSize?:any){
    this.supplierService.pageFindAll(pageSize).subscribe(data =>{
      this.suppliers =  data['content'];
      this.totalElements = data['totalElements'];
    })
  }


  nextPage(event: PageEvent){
    const  pageAndSize:any={};
    pageAndSize['page'] = event.pageIndex.toString();
    pageAndSize['size'] = event.pageSize.toString();
    this.pageFindAll(pageAndSize);
  }

  getRandomInt(max:any) {    return Math.floor(Math.random() * Math.floor(max));  }



}
