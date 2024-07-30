import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessNewComponent } from './bussiness-new/bussiness-new.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';

const routes: Routes = [
  {path:'',component:TopHeadlineComponent},
  {path:'home',component:TopHeadlineComponent},
  {path:'bussiness',component:BussinessNewComponent},
  {path:'tech',component:TechNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
