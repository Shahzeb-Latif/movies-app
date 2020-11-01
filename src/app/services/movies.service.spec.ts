import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movies } from '../models/movies';
import { MoviesService } from './moveis.service';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service Movies', () => {

    let service: MoviesService;
    let http: HttpClient;

    let httpMock: HttpTestingController;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, HttpClientModule],
            providers: [MoviesService]
        });

        service = TestBed.get(MoviesService);
        service = TestBed.inject(MoviesService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.inject(HttpClient);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();;
    })

    it('getMovies() ', () => {
        service.getMovies().subscribe(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
    });

    it('detailMovie() ', () => {
        service.detailMovie(680601).subscribe(data => {
            expect(data.results.length).toBeGreaterThan(0);
            expect(data.results.original_title).toBe("Up From the Streets - New Orleans: The City of Music");
        });
    });

});
