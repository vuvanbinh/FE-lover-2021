import {Component, OnInit, ViewChild} from '@angular/core';
import {Supplier} from "../../../model/Supplier";
import {MatPaginator} from "@angular/material/paginator";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  selected='all';
  status = '';
  @ViewChild(MatPaginator) paginator: any;
  suppliers: any;
  dataSource: any;
  displayedColumns: string[] = [];

  constructor(private supplierService: SupplierService,
              private userService:UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    let token = window.localStorage.getItem('USER');
    if (token == null) {
      this.router.navigate([''])
    }
    this.showAllUser()
    console.log(this.suppliers)
  }

  showAllSupplierByIsConfirm() {
    this.supplierService.findAllSupplierByIsConfirm().subscribe(data => {
      this.selected = 'browser';
      this.suppliers = data['content'];
      this.dataSource = new MatTableDataSource<any>(this.suppliers);
      this.dataSource.paginator = this.paginator;
      this.displayedColumns = ['STT', 'Avatar', 'Tên', 'Ngày gia nhập', 'Kích hoạt']
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


  users:any;
  showAllUser(){
    this.userService.finAllUser().subscribe(data=>{
      this.users = data;
      this.displayedColumns = ['STT', 'Avatar', 'User name', 'Ngày gia nhập', 'Vai trò','Block'];
      this.dataSource = new MatTableDataSource<any>(this.users);
      this.dataSource.paginator = this.paginator;
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

}
