import {Component, OnInit} from '@angular/core';
import {SupplierService} from "../../../service/supplier/supplier.service";
import {Supplier} from "../../../model/Supplier";
import {Services} from "../../../model/Service";
import {ServicesService} from "../../../service/services/services.service";

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.scss']
})
export class SupplierProfileComponent implements OnInit {

  supplier: any = {};
  changeImage?: HTMLImageElement;

  constructor(private supplierService: SupplierService,
              private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.getSupplier()
  }

  getSupplier() {
    this.supplierService.findByUser().subscribe(data => {
      this.supplier = data;
      this.changeImage = this.supplier.user.avatar
    })
  }

  changeAvatar(img: HTMLImageElement) {
    this.changeImage = img;
  }

  message = {message: "Change IsActive success!"}

  changeIsActive() {
    this.supplierService.changeIsActive(this.supplier.id).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.message)) {
        this.getSupplier();
      }
    })
  }

  priceBasic: any;
  checkClickChangePriceBasic: boolean = false;

  changeCheckClickChangePriceBasic(price: any) {
    this.priceBasic = price
    this.checkClickChangePriceBasic = true;
  }

  priceExtend: any;
  checkClickChangePriceExtend: boolean = false;
  status: any;

  changeCheckClickChangePriceExtend(price: any) {
    this.priceExtend = price;
    this.checkClickChangePriceExtend = true;
  }

  updatePrice(id: number, serviceType: string) {
    console.log('---------', id, '--------', serviceType, '--basic:', this.priceBasic, '--extend: ', this.priceExtend)
    let price = 0;
    if (serviceType === 'Dịch vụ cơ bản') {
      price = this.priceBasic;
    } else {
      price = this.priceExtend;
    }
    this.servicesService.changePriceById(id, price).subscribe(data => {
      if (JSON.stringify({message: "Update success!"}) === JSON.stringify(data)) {
        this.getSupplier();
        this.checkClickChangePriceBasic = false;
        this.checkClickChangePriceExtend = false;
        this.status = '';
      } else {
        this.status = 'Giá tiền không hợp lệ, mời nhập lại';
      }
    })
  }


}
