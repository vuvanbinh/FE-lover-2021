import { Component, OnInit } from '@angular/core';
import {SupplierService} from "../../service/supplier/supplier.service";
import {PageEvent} from "@angular/material/paginator";
import {Search} from "../../model/Search";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search:Search={}
  suppliers:any;
  totalElements?:number=0;
  age='Tuổi';

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.search.city='Địa chỉ'
    this.search.sex='Giới tính'
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


  searchSup() {
    let year = new Date().getFullYear()
    switch (this.age){
      case '1824':
        this.search.minYear= year-24;
        this.search.maxYear= year-18;
        break
      case '2529':
        this.search.minYear= year-29;
        this.search.maxYear= year-25;
        break
      case '3035':
        this.search.minYear= year-35;
        this.search.maxYear= year-30;
        break
    }

    console.log('----------------------',this.search)
    this.supplierService.search(this.search).subscribe(data=>{
      this.suppliers=data['content'];
      this.totalElements=data['totalElements']
    })
  }


  top6View() {
    this.supplierService.top6().subscribe(data=>{
      this.suppliers=data;
      this.totalElements=data.length
    })
  }


}
