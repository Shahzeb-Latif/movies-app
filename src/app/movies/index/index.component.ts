import { Component, OnInit, NgModule } from '@angular/core';
import { Movies } from '../../models/movies';
import { MoviesService } from '../../services/moveis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  moviesList: Movies[];
  search: string = '';
  favlist: Movies[];
  searchText;
  p;

  constructor(private _service: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesList = [];
    this.favlist = [];
    this.insertMovies();
  }

  makeFav(movie: Movies) {
    let list = JSON.parse(localStorage.getItem('fav'));
    if (list != null && list != undefined) {
      this.favlist = list;
    }
    this.favlist.push(movie);
    localStorage.setItem('fav', JSON.stringify(this.favlist));
    movie.favourite = true;


  }

  makeUnFav(movie: Movies) {
    let list = JSON.parse(localStorage.getItem('fav'));

    if (list != null && list != undefined) {
      list = list.filter(({ id }) => id !== movie.id);
      localStorage.setItem('fav', JSON.stringify(list));
      movie.favourite = false;
    }

  }
  checkFavourite(movie: Movies) {
    let list = JSON.parse(localStorage.getItem('fav'));
    return list.some((item) => item.id == movie.id);

  }
  detail(movie: Movies) {
    localStorage.setItem('movieId', JSON.stringify(movie.id));
    this.router.navigate(['/detail']);
  }

  insertMovies() {
    this._service.getMovies().subscribe(result => {
      for (let i = 0; i < result.results.length; i++) {
        let movie = new Movies();
        movie.id = result.results[i].id;
        movie.vote = result.results[i].vote_average;
        movie.name = result.results[i].original_title;
        movie.image = 'https://image.tmdb.org/t/p/w500' + result.results[i].poster_path;
        movie.halfOverview = result.results[i].overview.substring(0, Math.floor(result.results[i].overview.length / 2)) + "...";
        movie.date = result.results[i].release_date;
        movie.favourite = this.checkFavourite(movie);
        this.moviesList.push(movie);
      }

    });
  }
}
