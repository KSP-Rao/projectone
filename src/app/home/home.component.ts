import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public x:string="Thankyou";
 public showMessage:boolean;
  constructor() { }

  ngOnInit() {
  }
get()
{
this.showMessage=true;
}

}
