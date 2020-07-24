import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) {}  

  //urlBase="https://api.themoviedb.org/3/";
 

  getMovies(nameMovie: string,page:number){
    let url='https://api.themoviedb.org/3/search/movie?api_key=8e2341cf4820cf506fc303f1afd1f90c&language=en-US&query='+nameMovie+'&page='+page+'&include_adult=false';
    return new Promise((resolve ,reject)=>{
      this.http.get(url).subscribe(res=>{
      debugger
        resolve(res);
      }), error=>{
      debugger  
        reject(error);
      }
    })
  }
}
