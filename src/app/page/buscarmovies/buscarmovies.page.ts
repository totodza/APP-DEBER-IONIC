import { Component, OnInit ,ViewChild  } from '@angular/core';
import { ThemoviedbService}  from './../../service/themoviedb.service'
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-buscarmovies',
  templateUrl: './buscarmovies.page.html',
  styleUrls: ['./buscarmovies.page.scss'],
})
export class BuscarmoviesPage implements OnInit {
  peli:string;
  numberPage:number=1;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
 //injector de dependencias
  constructor(private themoviedbService:ThemoviedbService) { }
  //componentes:Componente[]=[
    //{
    //icon:'america-football',
    ////
    //
//  }]
  
  
  listMovies:any= [];
  nombrebusqueda:string;
  ngOnInit() {
   //this.getMovie();
  }
  getMovie(event){
    if(this.peli!=this.nombrebusqueda){
      this.listMovies.lenght=0;
      this.nombrebusqueda=this.peli;
      this.numberPage=1;
    }



    this.listMovies.length=0; 
    this.themoviedbService.getMovies(this.peli,this.numberPage).then(data=>{
      for(let i=0;i<data["results"].length;i++){
        this.listMovies.push(data["results"] [i]);
      }
      
      if (this.listMovies.length == 200) {
        event.target.disabled = true;
      }
      event.target.complete(); 
      this.numberPage++;
    }).catch(error=>{
  
    })
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}


//interface Componente{
  //icon:string;
  //name:string;
  //redirectTo:string;
//}
