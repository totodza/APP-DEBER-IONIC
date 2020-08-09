import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LoginService } from '../../service/login.service';
import {Router } from '@angular/router'

=======
import { AuthService} from "../../service/auth.service"
import { Router} from "@angular/router";
>>>>>>> 156680b3db1812c5ce60020419336f513082fb4c

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
<<<<<<< HEAD

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

=======
  email:string;
  password:string;
  constructor(private authService :AuthService , public router :Router) { }

  ngOnInit() {
  }
  onSubmitLogin(){
   // console.log("llego");
  this.authService.login(this.email,this.password).then(res=>{
  this.router.navigate(['/buscarmovies']);
  }).catch(err=>alert('los datos son incorrectos o no existe el usuario'))
  }
>>>>>>> 156680b3db1812c5ce60020419336f513082fb4c
}
