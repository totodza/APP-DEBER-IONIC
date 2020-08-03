import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  constructor(private http: HttpClient) { }
  getComentarios(idmovie:string) {
    debugger
    let url = 'http://127.0.0.1:8000/api/comentario/'+idmovie;
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
