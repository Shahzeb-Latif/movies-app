import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from '../../services/moveis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detailMovie = new Movies();
  constructor(private _service: MoviesService, private router: Router) { }


  ngOnInit(): void {

    let id = JSON.parse(localStorage.getItem('movieId'));


    this._service.detailMovie(id).subscribe(result => {

      let movie: Movies;

      console.log('country ' + result.release_date);
      this.detailMovie.id = result.id;
      this.detailMovie.vote = result.vote_average;
      console.log('res' + this.detailMovie.vote);
      this.detailMovie.name = result.original_title;
      this.detailMovie.image = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
      this.detailMovie.overview = result.overview;
      this.detailMovie.date = result.release_date;
      this.detailMovie.tagline = result.tagline;
      this.detailMovie.status = result.status;
      this.detailMovie.company = result.production_companies[0].name;
      this.detailMovie.country = result.production_countries[0].name;

    });

  }

}
