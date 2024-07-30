import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-bussiness-new',
  templateUrl: './bussiness-new.component.html',
  styleUrls: ['./bussiness-new.component.css']
})
export class BussinessNewComponent implements OnInit {

  constructor(private httpclient:HttpClient, private newServices:NewsapiService) { }
  bussinessNewsData:any=[];
  ngOnInit(): void {
    // call the services
    this.newServices.bussinessNews().subscribe((result) => {
      console.log(result.articles);
      this.bussinessNewsData=result.articles;
    })
  }

}
