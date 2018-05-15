import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:Array<any> = [
    {title: "Great Article", content: "Loved the article as always, great point about the upliftingness of humanity" },
    {title: "Can't believe you're a professional reporter", content:  "Worst piece of suppsed news I've ever wasted my time reading."},
    {title: "Everyone Chill Out", content: "This comment section is a bit harsh no?  Tone it down, why dont ya?"}
  ]

  newComment = {title: "", content:""}



  addNew():void{
    this.comments.push(this.newComment);
  }


  // createNewComment(titleArg:string, contentArg:string):void{
  //   const newComment = {title: titleArg, content: contentArg}
  //   this.comments.push(newComment)
  // }


  constructor() { }

  ngOnInit() {
  }

}
