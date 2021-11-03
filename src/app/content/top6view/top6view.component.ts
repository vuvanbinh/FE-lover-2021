import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../model/supplier/supplier";
import {SupplierService} from "../../service/supplier/supplier.service";

@Component({
  selector: 'app-top6view',
  templateUrl: './top6view.component.html',
  styleUrls: ['./top6view.component.scss']
})
export class Top6viewComponent implements OnInit {
  suppliers: any;
  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.getTop6();
  }

  getTop6() {
    this.supplierService.getTop6View().subscribe(top6 => {
      this.suppliers = top6;
      console.log(top6);
    });
  }
}
