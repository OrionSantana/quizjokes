import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  private apiUrlJ = 'https://api.chucknorris.io/jokes/random';
  private apiUrlC = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient) { }

  getJokes(): Observable <any>{
    return this.http.get(`${this.apiUrlJ}`);
  }

  getCat(): Observable <any>{
    return this.http.get(`${this.apiUrlC}`);
  }

}
