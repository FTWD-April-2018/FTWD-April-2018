import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {


  @Input() oneSingleComment: any;

  constructor() { }

  ngOnInit() {
  }

}
