import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = 'https://api.themoviedb.org/3/';
  api: string = 'api_key=e315ab68e5ab995324473b82912f0713';

  constructor(private http: HttpClient) { }

  getmovies(): Observable<any> {
    return this.http.get(this.url + "movie/upcoming?"+this.api);
  }

  detailMovie(id):Observable<any>{
    return this.http.get(this.url+"movie/"+id+"?"+this.api)
  }
}
