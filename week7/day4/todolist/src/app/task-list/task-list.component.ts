import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {TodolistService} from '../services/todolist.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  allTheTasks: Array<any> = [];

  constructor(private myService: TodolistService) { }

  ngOnInit() {
    this.myService.getAllTasks()
    .subscribe((theList)=>{
      this.allTheTasks = theList;
    })
  }

}
