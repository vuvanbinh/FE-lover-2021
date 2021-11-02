import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: any;

  constructor() { }

  ngOnInit(): void {
    this.name=window.localStorage.getItem('NAME_KEY');
  }

}
