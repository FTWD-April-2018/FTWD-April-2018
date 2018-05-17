import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allTheMovies: Array<any> = [];

  constructor(private myService: MovieService,
    private myRouter: Router
  ) { }


    goToMoviePage(theIDArgument){
      this.myRouter.navigate(['/movies', theIDArgument])
    }


  ngOnInit() {
    this.allTheMovies = this.myService.getMovies();
  }

}
