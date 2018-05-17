import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {TodolistService} from '../services/todolist.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  isFormShowing: Boolean = false;

  allTheTasks: Array<any> = [];

  newTask: any = {title: "", content: "", urgency: "", doneYet: false};

  constructor(
    private myService: TodolistService,
    private router: Router
  ) { }

  toggleForm(){
    this.isFormShowing = !this.isFormShowing;
  }

  getAllTheTasks(){
    console.log("getting all the tasks")
    this.myService.getAllTasks()
    .subscribe((theList)=>{
      this.allTheTasks = theList;
    })
  }

  deleteTask(idArgument){
    this.myService.deleteTask(idArgument)
    .subscribe(()=>{
      this.getAllTheTasks()
    })
  }

  addNewTask(){
    this.myService.createNewTask(this.newTask)
    .subscribe(()=>{
      this.getAllTheTasks()
    })
  }



  ngOnInit() {
    this.getAllTheTasks()
  }

}
