import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  constructor( private httpclient:HttpClient, private newServices:NewsapiService) { }

  topHeadingData:any=[];

  ngOnInit(): void {
    this.newServices.newsHeading().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadingData=result.articles;
      // console.log(this.topHeadingData);
    });
  }
}
