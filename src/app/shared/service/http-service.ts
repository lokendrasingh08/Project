import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  private BASE_URL = 'http://localhost:8080/';

  get(url) {
    return  this.http.get(this.BASE_URL + url);
  }

  post(url, data) {
    return  this.http.post(this.BASE_URL + url, data);
  }
}
