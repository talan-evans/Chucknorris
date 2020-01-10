import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChuckService } from './chuck.service';

describe('ChuckService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ChuckService = TestBed.get(ChuckService);
    expect(service).toBeTruthy();
  });

  it('should get data', inject(
    [HttpTestingController, ChuckService],
    (httpMock: HttpTestingController, mockChuck: ChuckService) => {
      const mockJoke = {
        value: {
          joke: 'test joke',
          categories: ['test']
        }
      };

      mockChuck.getJoke().subscribe(data => {
        expect(data.value.joke.trim()).toEqual('test joke');
        expect(data.value.categories.length).toEqual(1);
        expect(data.value.categories[0].trim()).toEqual('test');
      });

      let response = httpMock.expectOne(mockChuck.url);
      response.flush(mockJoke);
    }
  ))
});
