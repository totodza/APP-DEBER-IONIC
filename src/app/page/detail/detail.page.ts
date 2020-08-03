import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service';
import { ComentarioService } from '../../service/comentario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class  DetailPage  implements OnInit {
  detailMovies: any = [];
  idMovie: string;
  video: any = [];
  verComentario:boolean= false;

  constructor(private  themoviedbService:ThemoviedbService,
                      private router: ActivatedRoute,
                      private Comentar:ComentarioService)
                      { }

  ngOnInit() {
    this.idMovie=this.router.snapshot.paramMap.get('id');
    this.getDetailMovie();
    this.getVideo();
    this.getComentario();
  
  }
  getComentario(){
    this.Comentar.getComentarios(this.idMovie).then(data=>{
     
    }).catch(error=>{
     

    })
  }
  

getDetailMovie(){
  this.themoviedbService.getMoviesDetail(this.idMovie).then(data =>{    
    this.detailMovies=data;
  }).catch(error=>{

  })
}
getVideo() {
  this.themoviedbService.TraerVideo(this.idMovie).then(data => {
  
    this.video.push(data["results"][0]);
   
  }).catch(error => {
    

  })
}
  verComent(){
    this.verComentario=!this.verComentario;
    ;

}

}






