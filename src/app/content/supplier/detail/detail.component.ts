import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  supplierForm: FormGroup =new FormGroup({});
  id!: number ;
  supplier: any ;
  constructor(private supplierService: SupplierService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = paraMap.get('id');
      this.showEditSupplier(this.id);
    })
  }

  ngOnInit(): void {
    this.supplierForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
    })

  }

  showEditSupplier(id: number) {
    this.supplierService.findById(id).subscribe(data => {
      this.supplier = data;
      this.supplierForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),


      })

    })
  }

}
