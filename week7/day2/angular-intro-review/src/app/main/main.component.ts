import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

title: string = "Uplifting Story on Upper East Side (Wholesome Feels)"
imagePath: string = "/assets/images/truck.jpg";
content: string = `Early this morning, a man in need received help from 3 concerned bystanders
as they helped pull his car out of a ditch`
// secretPhrase:string = "Another Secret Phrase"


  constructor() { }
  ngOnInit() {
  }



  sayHi(arg:string):void{
    console.log(arg)
  }

}
