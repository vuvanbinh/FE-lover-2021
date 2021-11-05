import {Component, OnInit, ViewChild} from '@angular/core';
import {Supplier} from "../../../model/Supplier";
import {MatPaginator} from "@angular/material/paginator";
import {SupplierService} from "../../../service/supplier/supplier.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  status='';
  @ViewChild(MatPaginator) paginator: any;
  suppliers:any;
  dataSource: any;
  displayedColumns: string[] = ['STT','Avatar','Tên', 'Ngày gia nhập','Kích hoạt'];


  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.showAll()
    console.log(this.suppliers)
  }

  showAll(){
    this.supplierService.findAllByIsConfirm().subscribe(data=>{
      this.suppliers=data['content'];
      this.dataSource=new MatTableDataSource<any>(this.suppliers);
      this.dataSource.paginator=this.paginator;
    })
  }

  message={message:"Browser success!"}

  conFirm(id: number, name:string) {
    let conf = confirm('Xác nhận duyệt cho '+name+' trở thành người cung cấp dịch vụ?');
    if (conf){
      this.supplierService.changeIsConfirm(id).subscribe(data=>{
        if (JSON.stringify(data)===JSON.stringify(this.message)){
          this.status='Đã duyệt cho '+name+' trở thành nhà cung cấp.'
          this.showAll();
        }
      })
    }else {
      return;
    }

  }


}
