import { Component, OnInit } from '@angular/core';
import {Services} from "../../../model/Service";
import {ServicesService} from "../../../service/services/services.service";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  status='';
  services:Services={};
  serviceName:Array<string>=['Ra mắt người nhà','Ra mắt bạn bè','Du lịch chung cùng nhóm bạn','Đi chơi chung'
    ,'Tham dự sinh nhật','Trò chuyện offline','Trò chuyện online','Đi chơi tết','Đi chơi ngày lễ','Nắm tay'
    ,'Nói yêu','Nhìn mắt','Hôn tay','Ôm','Nhõng nhẽo','Cử chỉ thân mật','Nói lời yêu']
  serviceType: Array<string> = ['Dịch vụ cơ bản', 'Dịch vụ miễn phí', 'Dịch vụ mở rộng'];

  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.services.price=0;
  }

  message={message:"Create success!"}
  submit() {
    console.log(this.services.name)
    if (this.services.name===undefined||this.services.serviceType===undefined){
      this.status='Dữ liệu đang bị bỏ trống mời nhập lại!';
      return;
    }
    console.log(this.services);
    this.servicesService.create(this.services).subscribe(data=>{
      if (JSON.stringify(data)===JSON.stringify(this.message)){
        this.status='Đăng ký dịch vụ thành công!';
      }
    })
  }

  resetStatus() {
    this.status='';
  }
}
