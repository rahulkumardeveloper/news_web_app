import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private httpclient:HttpClient) { }
  // top heading new api url

  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=f0e8e25e5da0417ab3b0d7acc02e6866';
  topTechnologyNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f0e8e25e5da0417ab3b0d7acc02e6866'
  topBussinessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f0e8e25e5da0417ab3b0d7acc02e6866'

  bussinessNews():Observable<any>{
    return this.httpclient.get(this.topBussinessNews);

  }
  techNews():Observable<any>{
    return this.httpclient.get(this.topTechnologyNews);
  }
  newsHeading():Observable<any>{
    return this.httpclient.get(this.topHeadlinesNews)
  }
}
