import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,
              private router :Router) { }


  login(email:string ,password:string){

    return new Promise((resolve,rejected)=>{
      //AFauth para acceder las funciones  de firebase
      this.AFauth.signInWithEmailAndPassword(email,password).then(user=>{
        resolve(user);
        // console.log(res)
      }).catch(err=>rejected(err));
    });
  }
logout(){
  this.AFauth.signOut().then(()=>{
    this.router.navigate(['home']);
  })
}
}
