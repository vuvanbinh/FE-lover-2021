import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";
import {OrderService} from "../../../service/order/order.service";
import {BrowserMoneyDialogComponent} from "../../../dialog/browser-money-dialog/browser-money-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  selected='all';
  status = '';



  constructor(private supplierService: SupplierService,
              private userService:UserService,
              private router: Router,
              private orderService:OrderService,
              private dialog:MatDialog) {
  }

  ngOnInit(): void {
    let token = window.localStorage.getItem('USER');  ``
    if (token == null) {
      this.router.navigate([''])
    }

    this.showAllUser()
  }


  @ViewChild(MatPaginator) paginator: any;
  suppliers: any=[];
  dataSource: any;
  displayedColumns: string[] = [];
  showAllSupplierByIsConfirm() {
    this.supplierService.findAllSupplierByIsConfirm().subscribe(data => {
      if (data==null){
        this.status = 'Hiện tại không có yêu cầu nào'
      }else {
        this.selected = 'browser';
        this.suppliers = data['content'];
        this.dataSource = new MatTableDataSource<any>(this.suppliers);
        this.dataSource.paginator = this.paginator;
        this.displayedColumns = ['STT', 'Avatar', 'Tên', 'Ngày gia nhập', 'Kích hoạt']
      }
    })
  }
  message = {message: "Success!"}
  conFirm(id: number, name: string) {
    let conf = confirm('Xác nhận duyệt cho ' + name + ' trở thành người cung cấp dịch vụ?');
    if (conf) {
      this.supplierService.changeIsConfirm(id).subscribe(data => {
        if (JSON.stringify(data) === JSON.stringify(this.message)) {
          this.status = 'Đã duyệt cho ' + name + ' trở thành nhà cung cấp.'
          this.showAllSupplierByIsConfirm();
        }
      })
    } else {
      return;
    }
  }

  @ViewChild(MatPaginator) paginator1: any;
  dataSource1: any;
  displayedColumns1: string[] = [];
  users:any;
  showAllUser(){
    this.userService.finAllUser().subscribe(data=>{
      this.users = data;
      this.displayedColumns1 = ['STT', 'Avatar', 'User name', 'Ngày gia nhập', 'Vai trò','Block'];
      this.dataSource1 = new MatTableDataSource<any>(this.users);
      this.dataSource1.paginator = this.paginator1;
      this.selected = 'all';
    })
  }
  blockAccount(id:number) {
      this.userService.blockAccount(id).subscribe(data => {
        if (JSON.stringify(data) === JSON.stringify(this.message)) {
          this.showAllUser();
        }
      })
    }


  @ViewChild(MatPaginator) paginator2: any;
  dataSource2: any;
  displayedColumns2: string[] = [];
    orders:any;
    showAllOrder(){
      this.orderService.findAll().subscribe(data=>{
        this.selected = 'allOrder';
        console.log(data)
        this.orders = data;
        this.dataSource2 = new MatTableDataSource<any>(this.orders);
        this.dataSource2.paginator = this.paginator2;
        this.displayedColumns2 = ['STT', 'SupplierName', 'CustomerName', 'DayStart', 'TotalMoney','StatusOrder', 'Browser'];

      })
    }
  browser(id: number,supplierName:string) {
     const dialogRef= this.dialog.open(BrowserMoneyDialogComponent);
     dialogRef.afterClosed().subscribe(result=>{
       if (result){
         this.orderService.changeOrderStatus(id).subscribe(data=>{
           if (JSON.stringify(data)===JSON.stringify({message:"Update success!"})){
             this.showAllOrder();
             this.status = 'Thanh toán tiền dịch vụ thành công cho '+supplierName;
           }
         })
       }
     })
  }


  resetStatus() {
    this.status='';
  }
}
