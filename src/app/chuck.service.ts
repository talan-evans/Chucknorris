import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  url: string = 'http://api.icndb.com/jokes/15';

  constructor(
    private httpClient: HttpClient
  ) { }

  getJoke(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
