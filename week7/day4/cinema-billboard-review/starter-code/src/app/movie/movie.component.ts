import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  theMovie: any = {};

  constructor(private route: ActivatedRoute,
    private myService: MovieService
  ) { }


  ngOnInit() {
    this.route.params
    .subscribe((theParams) => {
      const theID = Number(theParams['id']);
      this.theMovie = this.myService.getMovie(theID)
    })

}




}
