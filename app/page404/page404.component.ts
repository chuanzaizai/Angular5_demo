import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  topage1(){
    //this.router.navigate(["/page1"],{queryParams:{"id":"10","name":"word","age":"30"}});
    this.router.navigateByUrl("/page1?name=hello&id=2&age=20");
  }
  topage2(){
    this.router.navigateByUrl("/page2/2/3");
  }
}
