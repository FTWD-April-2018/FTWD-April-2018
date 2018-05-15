import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SingleCommentComponent } from './single-comment/single-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent,
    CapitalizePipe,
    SingleCommentComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
