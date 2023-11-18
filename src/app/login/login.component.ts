import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { AuthService } from 'src/service/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthSer: AuthService, private ngZone:NgZone,private router:Router){}
  
  GoogleLogin():void
  {
  //connecter sur FireBase (authservice)
    this.AuthSer.doGoogleLogin().then(() =>{
        this.successRedirect();
    })
    //if authentifié => redirect to members

  }
  successRedirect():void
  {
    //reprendre le focus de Firebase sur la partie frontale
    //executer la direction
    this.ngZone.run(() =>{
      this.router.navigate(['/members']);
    })
  }

  

}
