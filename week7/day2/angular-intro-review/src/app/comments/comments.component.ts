import { Component, OnInit } from '@angular/core';
import { SingleCommentComponent } from '../single-comment/single-comment.component';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:Array<any> = [
    {title: "great Article", content: "Loved the article as always, great point about the upliftingness of humanity" },
    {title: "can't BELIEVE you're a PROFESSIONAL reporter", content:  "Worst piece of suppsed news I've ever wasted my time reading."},
    {title: "eVeRyOnE cHILl oUt", content: "This comment section is a bit harsh no?  Tone it down, why dont ya?"}
  ]

  newComment = {title: "", content:""}



  addNew():void{
    const newOne = {title: this.newComment.title, content: this.newComment.content}
    this.comments.push(newOne);
  }


  // createNewComment(titleArg:string, contentArg:string):void{
  //   const newComment = {title: titleArg, content: contentArg}
  //   this.comments.push(newComment)
  // }


  constructor() { }

  ngOnInit() {
  }

}
