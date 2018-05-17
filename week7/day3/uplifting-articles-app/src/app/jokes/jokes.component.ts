import { Component, OnInit } from '@angular/core';
import {JokeService} from '../services/joke.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  // joke$: Observable<string>;
  joke: any = ""

  constructor(private myJokeService: JokeService) { }

  ngOnInit() {}



  getRandomJoke() {
   // this.joke$ = this.myJokeService.getRandom()
   this.myJokeService.getRandom()
   .subscribe((theJoke)=>{
     this.joke = theJoke
   })



}

}
