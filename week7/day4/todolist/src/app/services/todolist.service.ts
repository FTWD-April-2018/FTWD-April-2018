import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class TodolistService {

  constructor(private myHttp: Http) { }

  getAllTasks() {
    return this.myHttp.get('http://localhost:3000')
    .map((responseFromApi) => responseFromApi.json())
  }

}
