import { Component, OnInit } from '@angular/core';
import {StaffService} from '../services/staff.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

title: string = "Uplifting Story on Upper East Side (Wholesome Feels)"
imagePath: string = "/assets/images/truck.jpg";
content: string = `Early this morning, a man in need received help from 3 concerned bystanders
as they helped pull his car out of a ditch.  It was a wonderful lesson
and a reminder of the fundamental goodness of humanity.  Joy to the world!
`
// secretPhrase:string = "Another Secret Phrase"
theDate:Number = Date.now();


classArray:Array<String> = [];

  constructor(private theService: StaffService) { }
  ngOnInit() {
  }


incFunction(){
  this.theService.increment();
}

  addMagicClass(theArgument:string):void{
    this.classArray.push(theArgument)
  }

}
