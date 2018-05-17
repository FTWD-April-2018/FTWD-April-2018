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

  theUpdates:any = {};

  constructor(
    private myService:TodolistService,
    private route: ActivatedRoute
   ) { }

  getTheTask(id){
    this.myService.getOneTask(id)
    .subscribe((responseFromService)=>{
      this.theTask = responseFromService
    })
  }

updateTheTask(idOfTask){
  this.myService.updateTask(idOfTask,this.theUpdates)
  .subscribe(()=>{
      this.getTheTask(idOfTask)
      this.theUpdates = {};
  })

}

  ngOnInit() {
    this.route.params
    .subscribe((theParams) => {
      const theID = theParams['id'];
      this.getTheTask(theID)
    })
  }

}
