import { Component, OnInit,NgModule} from '@angular/core';
import {Movies} from '../../models/movies';
import {MoviesService} from '../../services/moveis.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-favourtie',
  templateUrl: './favourtie.component.html',
  styleUrls: ['./favourtie.component.css']
})
export class FavourtieComponent implements OnInit {

  movies:Movies[];
  searchText;
  p;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.movies= [];
    this.movies = JSON.parse(localStorage.getItem('fav'));
  }

  makeUnFav(movie:Movies){

    let list = JSON.parse(localStorage.getItem('fav'));

    if(list != null && list != undefined){

   
      list = list.filter(({ id }) => id !== movie.id);    
     
      localStorage.setItem('fav',JSON.stringify(list));
      movie.favourite = false;
    }
    location.reload();    
  }
  detail(movie:Movies){
    localStorage.setItem('movieId',JSON.stringify(movie.id));
    this.router.navigate(['/detail']);
  }
}
