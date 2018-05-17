import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../services/todolist.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  theTask: any = {};

  constructor(
    private myService:TodolistService,
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.route.params
    .subscribe((theParams) => {
      const theID = theParams['id'];
      this.myService.getOneTask(theID)
      .subscribe((responseFromService)=>{
        this.theTask = responseFromService
      })
    })
  }

}
