import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-succses-diaglog',
  templateUrl: './succses-diaglog.component.html',
  styleUrls: ['./succses-diaglog.component.scss']
})
export class SuccsesDiaglogComponent implements OnInit {

  @Input() message='';
  constructor() { }

  ngOnInit(): void {
  }

}
