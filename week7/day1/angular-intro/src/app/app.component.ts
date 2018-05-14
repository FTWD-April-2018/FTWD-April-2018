import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extra super awesome app';
  otherVariable = "Blah"
  arrayVar = [{name:'cat', size: "small"},
   {name: 'dog', size: "medium"},
    {name:'hyena', size:"medium"},
     {name:'cyclops', size: "large"},
      {name:'t-rex' size: "extra large"}]
}
