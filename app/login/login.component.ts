import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { //组件被创建

  }
  login(){ // 登录跳转页面
    //this.router.navigate(["/page1"],{queryParams:{"id":"10","name":"word","age":"30"}});
    this.router.navigateByUrl("/index/page1?uname=xusong&password=123456");
  }
}
