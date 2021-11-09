import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SupplierService} from "../../../service/supplier/supplier.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  supForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    typeServices: new FormControl()

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
