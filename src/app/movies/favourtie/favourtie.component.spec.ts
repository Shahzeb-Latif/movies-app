import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavourtieComponent } from './favourtie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Movies } from 'src/app/models/movies';

describe('FavourtieComponent', () => {
  let component: FavourtieComponent;
  let fixture: ComponentFixture<FavourtieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavourtieComponent],
      imports: [HttpClientTestingModule, Ng2SearchPipeModule, NgxPaginationModule, HttpClientModule, RouterTestingModule],
      providers: [FavourtieComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavourtieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('detail()', () => {
    let movie: Movies;
    movie = new Movies();
    movie.id = "680601";
    expect(component.detail(movie)).length > 0;
  });
});
