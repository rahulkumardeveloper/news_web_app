import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private httpclient:HttpClient, private newServices:NewsapiService) { }
  techNewData: any = [];

  ngOnInit(): void {
    this.newServices.techNews().subscribe((result) => {
      console.log(result.articles);
      this.techNewData=result.articles;
    })
  }



}
