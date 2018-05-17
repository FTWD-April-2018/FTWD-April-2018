import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { MyAboutComponent } from './my-about/my-about.component';
import {StaffService} from './services/staff.service';
import { JokesComponent } from './jokes/jokes.component';
import {JokeService} from './services/joke.service'



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MainComponent },
  { path: 'about/:id', component: MyAboutComponent },
  {path:'joke', component: JokesComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent,
    CapitalizePipe,
    SingleCommentComponent,
    MyAboutComponent,
    JokesComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,

     RouterModule.forRoot(routes)
  ],
  providers: [StaffService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
