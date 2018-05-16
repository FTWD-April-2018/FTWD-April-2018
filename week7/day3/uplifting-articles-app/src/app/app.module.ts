import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { MyAboutComponent } from './my-about/my-about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MainComponent },
  { path: 'about/:id', component: MyAboutComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent,
    CapitalizePipe,
    SingleCommentComponent,
    MyAboutComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
