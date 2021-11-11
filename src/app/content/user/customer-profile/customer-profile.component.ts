import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from "../../../service/order/order.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  displayedColumns: string[] = ["STT","Người cung cấp","Địa điểm","Thời gian thuê"
    ,"Thời gian bắt đầu","Tổng tiền","Trạng thái","Thao tác"];

  dataSource: any;
  @ViewChild(MatPaginator) paginator: any;

  constructor(private orderService:OrderService,
              ) { }

  ngOnInit(): void {
    this.findAllOrderBySupplier();
  }

  findAllOrderBySupplier(){
    this.orderService.findAllByUser().subscribe(data=>{
      if ( !(JSON.stringify(data)===JSON.stringify({message:"Is empty!"})) ){
        this.dataSource=data;
      }
    })
  }

  changeStatusOrder(id: number) {
    let conf = confirm("Xác nhận hoàn thành đơn này?");
    if (conf){
      this.orderService.changeOrderStatus(id).subscribe(data => {
        if (JSON.stringify(data)===JSON.stringify({message:"Update success!"})){
          this.findAllOrderBySupplier();
          this.dataSource = new MatTableDataSource<any>(this.dataSource);
          this.dataSource.paginator = this.paginator;
        }
      })
    }else return
  }
}
