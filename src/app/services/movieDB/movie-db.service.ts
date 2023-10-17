import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string = "eb1636c9926bac08a9b7c83015747d09";
  api_url: string = 'https://api.themoviedb.org/3/';


  constructor(private _https: HttpClient) { }

  getTrending() {
    return this._https.get(this.api_url + '/trending/all/week', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjE2MzZjOTkyNmJhYzA4YTliN2M4MzAxNTc0N2QwOSIsInN1YiI6IjY1MmI0NzBkMDI0ZWM4MDEwMTUxY2FiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smSns7lAAwoUFMly7rLki-DPbL1cZzkJrHD36Oa1_yU'
      }
    });
  }

  getMovies() {
    return this._https.get(this.api_url + '/movie/popular', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjE2MzZjOTkyNmJhYzA4YTliN2M4MzAxNTc0N2QwOSIsInN1YiI6IjY1MmI0NzBkMDI0ZWM4MDEwMTUxY2FiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smSns7lAAwoUFMly7rLki-DPbL1cZzkJrHD36Oa1_yU'
      }
    });
  }

  getSeries() {
    return this._https.get(this.api_url + '/tv/popular', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjE2MzZjOTkyNmJhYzA4YTliN2M4MzAxNTc0N2QwOSIsInN1YiI6IjY1MmI0NzBkMDI0ZWM4MDEwMTUxY2FiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smSns7lAAwoUFMly7rLki-DPbL1cZzkJrHD36Oa1_yU'
      }
    });
  }
}
