import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

logeo(correo:string,contra:string) {
    debugger
    let url = 'http://127.0.0.1:8000/api/login/'+correo+'/'+contra;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {

        resolve(res);
        debugger
      }), error => {
        reject(error);
      }
    })
  }
}
