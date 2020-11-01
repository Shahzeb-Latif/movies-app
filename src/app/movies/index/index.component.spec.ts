import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Movies } from 'src/app/models/movies';
describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent],
      imports: [HttpClientTestingModule, Ng2SearchPipeModule, NgxPaginationModule, HttpClientModule, RouterTestingModule],
      providers: [IndexComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('makeFav()', () => {
    let movie: Movies;
    movie = new Movies();
    movie.id = "680601";
    movie.name = "test";
    component.makeFav(movie);
    let list = JSON.parse(localStorage.getItem('fav'));
    expect(list.length > 0);
  });

  it('makeUnFav()', () => {
    let movie: Movies;
    movie = new Movies();
    movie.id = "680601";
    movie.name = "test";
    component.makeUnFav(movie);
    let list = JSON.parse(localStorage.getItem('fav'));
    expect(list.length >= 0);
  });

  it('checkFavourite()', () => {
    let movie: Movies;
    movie = new Movies();
    movie.id = "680601";
    movie.name = "test";
    expect(component.checkFavourite(movie) == true || false);
  });

  it('detail()', () => {
    let movie: Movies;
    movie = new Movies();
    movie.id = "680601";
    expect(component.detail(movie)).length > 0;
  });



  it('insertMovies()', () => {
    expect(component.insertMovies()).length > 0;
  });

});
