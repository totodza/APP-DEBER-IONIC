import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import {Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private login:LoginService, private ruta: Router) { }
  user:any=[];
  mail:string;
  pas:string;
  ngOnInit() {
  }
  logeop(){
    this.login.logeo(this.mail,this.pas).then(data =>{
        this.user=data['usuarios']  
      // debugger
      if(this.user.length==1){
        this.ruta.navigate(['/bucarmovies']);
        }
    }).catch(error =>{
        console.log(error);
    })

  }

}
