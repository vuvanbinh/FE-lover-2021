import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SupplierService} from "../../../service/supplier/supplier.service";

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {
  supForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });
  constructor(private supService: SupplierService ) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.supForm.value;
    this.supService.saveSupplier(category);
    this.supForm.reset();
  }
}
