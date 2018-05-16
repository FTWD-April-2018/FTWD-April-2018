import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css']
})
export class MyAboutComponent implements OnInit {

  theStaffMember:any = {id: 0, name: "", position: ""};


  staff:Array<any> = [
    {id: 1, name: "Veronia Brough", position: "CEO"},
    {id: 2, name: "Johnathan Rodriguez", position: "Intern"},
    {id: 3, name: "Zena Lauren", position: "Data Analytics"},
    {id: 4, name: "Pat Smith", position: "Political Correctness Supervisor"},
    {id: 5, name: "Guy Guy", position: "He's Just a Guy"}
  ]


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        const theID = (params['id'])

        this.theStaffMember = this.staff.find((oneMember)=>{
          return oneMember.id === Number(theID)
        })
      };
  }

}
