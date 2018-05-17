// jokes.service.ts
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';



@Injectable()
export class JokeService {

  constructor(private myHttp: Http) { }

  getRandom() {
    return this.myHttp.get('http://api.icndb.com/jokes/random')
    .map((responseFromApi) => responseFromApi.json())
     .map((res) => res.value.joke);
  }

}
