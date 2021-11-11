import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {SignInForm} from "../../model/SignInForm";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ErorrIsBlockComponent} from "../../dialog/erorr-is-block/erorr-is-block.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sigInForm: SignInForm = {}
  status = '';
  hide = true;

  constructor(private userService: UserService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }


  ngSubmit() {
    this.userService.signIn(this.sigInForm).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify({message:"no"})) {
        this.status = 'Sai tên đăng nhập hoặc mật khẩu mời nhập lại';
        return;
      }else if(JSON.stringify(data)===JSON.stringify({message:"isBlock"})){
        this.dialog.open(ErorrIsBlockComponent);
        return;
      } else {
        window.localStorage.setItem('USER', JSON.stringify(data))
        window.localStorage.setItem('AVATAR',data.avatar);
        if (this.userService.getRole() == 'ADMIN') {
          this.router.navigate(['admin']).then(()=>{
            location.reload();
          })
        } else {
          this.router.navigate(['']).then(() => {
            location.reload()
          })
        }
      }
    })
  }
}
