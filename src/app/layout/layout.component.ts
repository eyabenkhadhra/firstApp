import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { AuthService } from 'src/service/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor(private AuthSer: AuthService,private router:Router){}
  user:any;
  ngOnInit(){
    this.AuthSer.getUserClaims().then((x)=>(this.user=x))
  }
  
  logout():void{

    this.AuthSer.doLogout().then(() =>{
      this.router.navigate(['/login']);
  })
 }
}
