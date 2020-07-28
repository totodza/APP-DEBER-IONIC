import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class  DetailPage  implements OnInit {
  detailMovies: any = [];
  idMovie: string;

  constructor(private  themoviedbService:ThemoviedbService,
                      private router: ActivatedRoute) { }

  ngOnInit() {
    this.idMovie=this.router.snapshot.paramMap.get('id');
    this.getDetailMovie();
  
  }

getDetailMovie(){
  this.themoviedbService.getMoviesDetail(this.idMovie).then(data =>{    
    this.detailMovies=data;
  }).catch(error=>{

  })
}

}




