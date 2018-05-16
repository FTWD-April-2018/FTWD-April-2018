import { Injectable } from '@angular/core';

@Injectable()
export class StaffService {
    count: number = 0;

    staffArray: Array<any> = [
    {id: 1, name: "Veronia Brough", position: "CEO"},
    {id: 2, name: "Johnathan Rodriguez", position: "Intern"},
    {id: 3, name: "Zena Lauren", position: "Data Analytics"},
    {id: 4, name: "Pat Smith", position: "Political Correctness Supervisor"},
    {id: 5, name: "Guy Guy", position: "He's Just a Guy"}
  ]



    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
}
