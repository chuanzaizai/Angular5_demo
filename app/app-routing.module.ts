/*
 * 注册、定义路由
*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 登录
import {LoginComponent} from "app/login/login.component";


// 父容器
import {IndexComponent} from "app/index/index.component";

// 子组件模块
import {Page1Component} from "app/page1/page1.component";
import {Page2Component} from "app/page2/page2.component";
import {Page3Component} from "app/page3/page3.component";
import {Page4Component} from "app/page4/page4.component";

// 404
import {Page404Component} from "app/page404/page404.component";

const routes : Routes = [
  {path: '',component:LoginComponent, pathMatch:"full"}, // 默认路由(登录)
  {path: 'index',component:IndexComponent,children:[ // 测试嵌套路由
    {path:"",redirectTo:"page1",pathMatch:"full"}, // 默认路由
    {path:"page1",component:Page1Component}, // 嵌套路由第一个模块
    {path:"page2",component:Page2Component},  // 嵌套路由第二个模块
    {path:"page3",component:Page3Component},  // 嵌套路由第三个模块
    {path:"page4",component:Page4Component}  // 嵌套路由第四个模块
  ]},

  {path: '**',component:Page404Component} // 404页面
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
