import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  @Input() oneSingleComment: any
  @Output() commentBeingDeleted = new EventEmitter<string>();

  deleteComment(theWholeComment){
    this.commentBeingDeleted.emit(theWholeComment);
  }

  constructor() { }



  ngOnInit() {
  }

}
