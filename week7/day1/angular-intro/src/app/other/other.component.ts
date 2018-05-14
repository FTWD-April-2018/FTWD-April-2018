import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  tagline:string = "Its a great day for icecream here at coldstone creamery, how may I help you?"

  constructor() { }

  ngOnInit() {
  }

}
