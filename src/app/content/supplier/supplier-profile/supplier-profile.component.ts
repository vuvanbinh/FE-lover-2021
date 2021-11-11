import {Component, OnInit, ViewChild} from '@angular/core';
import {SupplierService} from "../../../service/supplier/supplier.service";
import {Supplier} from "../../../model/Supplier";
import {Services} from "../../../model/Service";
import {ServicesService} from "../../../service/services/services.service";
import {OrderService} from "../../../service/order/order.service";
import {MatDialog} from "@angular/material/dialog";
import {GetMoneyDialogComponent} from "../../../dialog/get-money-dialog/get-money-dialog.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.scss']
})
export class SupplierProfileComponent implements OnInit {

  supplier: any = {};
  supplierID:any;
  changeImage?: HTMLImageElement;

  constructor(private supplierService: SupplierService,
              private servicesService: ServicesService,
              private orderService:OrderService,
              private dialog : MatDialog) {
  }

  ngOnInit(): void {
    this.getSupplier()
  }


  getSupplier() {
    this.supplierService.findByUser().subscribe(data => {
      this.supplier = data;
      this.changeImage = this.supplier.user.avatar;
      this.supplierID = this.supplier.id;
      this.findAllOrderBySupplier()
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




  @ViewChild(MatPaginator) paginator: any;
  dataSource: any;
  displayedColumns: string[] = ["STT","Người thuê","Địa điểm","Thời gian thuê"
    ,"Thời gian bắt đầu","Tổng tiền","Trạng thái","Thao tác"];
  findAllOrderBySupplier(){
    this.orderService.findAllBySupplier(this.supplierID).subscribe(data=>{
      if ( !(JSON.stringify(data)===JSON.stringify({message:"Is empty!"})) ){
        this.dataSource=data;
        this.dataSource = new MatTableDataSource<any>(this.dataSource);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  changeStatusOrder(id:number) {
    console.log('--------id-----',id)
    this.orderService.changeOrderStatus(id).subscribe(data => {
      if (JSON.stringify(data)===JSON.stringify({message:"Update success!"})){
      this.getSupplier();
      }
    })
  }

  getMoney() {
    this.dialog.open(GetMoneyDialogComponent);
  }

}
