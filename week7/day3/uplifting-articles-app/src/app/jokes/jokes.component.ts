import { Component, OnInit } from '@angular/core';
import {JokeService} from '../services/joke.service'
import { Observable } from 'rxjs/Observable';
import {Map} from 'rxjs/map'
import 'rxjs/Rx'

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  joke$: Observable<string>;

  constructor(private myJokeService: JokeService) { }

  ngOnInit() {}



  getRandomJoke() {
   this.joke$ = this.myJokeService.getRandom();
   console.log(this.joke$)

}

}
