import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StaffService} from '../services/staff.service';

@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css'],

})
export class MyAboutComponent implements OnInit {

  theStaffMember:any = {id: 0, name: "", position: ""};


  constructor(private route: ActivatedRoute,
    private myService: StaffService) { }

    doTheIncrement(){
      this.myService.increment();
    }


  ngOnInit() {



    this.route.params
      .subscribe((params) => {
        const theID = (params['id'])
        this.theStaffMember = this.myService.staffArray.find((oneMember)=>{
          return oneMember.id === Number(theID)
        })
      };
  }

}
