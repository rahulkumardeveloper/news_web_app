import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import {HttpClientModule} from '@angular/common/http'
import { NewsapiService } from './service/newsapi.service';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BussinessNewComponent } from './bussiness-new/bussiness-new.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeadlineComponent,
    FooterComponent,
    TechNewsComponent,
    BussinessNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    LoadingBarHttpClientModule,
    MatIconModule
    
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
