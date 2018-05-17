import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
    moviesList: Array<any> = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        poster: "https://i.imgur.com/SuW2ZlC.jpg",
        synopsis: "In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death...",
        genres: [
          "Crime", "Drama"
        ],
        year: 1994,
        director: "Frank Darabont",
        actors: [
          "Tim Robbins",
          "Morgan Freeman",
          "Bob Gunton",
          "William Sadler",
          "Clancy Brown",
          "Gil Bellows"
        ]
      }, {
        id: 2,
        title: "The Godfather",
        poster: "https://i.imgur.com/Uzvny9I.jpg",
        synopsis: "In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito...",
        genres: [
          "Crime", "Drama"
        ],
        year: 1972,
        director: "Francis Ford Coppola",
        actors: [
          "Marlon Brando",
          "Al Pacino",
          "James Caan",
          "Richard S. Castellano",
          "Robert Duvall",
          "Sterling Hayden"
        ]
      }, {
        id: 3,
        title: "The Godfather Part II",
        poster: "https://i.imgur.com/abJNkWI.jpg",
        synopsis: "The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie; the othe...",
        genres: [
          "Crime", "Drama"
        ],
        year: 1974,
        director: "Francis Ford Coppola",
        actors: [
          "Al Pacino",
          "Robert Duvall",
          "Diane Keaton",
          "Robert De Niro",
          "John Cazale",
          "Talia Shire"
        ]
      }, {
        id: 4,
        title: "The Dark Knight",
        poster: "https://i.imgur.com/3jLPB46.jpg",
        synopsis: "The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...",
        genres: [
          "Action", "Crime", "Drama", "Thriller"
        ],
        year: 2008,
        director: "Christopher Nolan",
        actors: [
          "Christian Bale",
          "Heath Ledger",
          "Aaron Eckhart",
          "Michael Caine",
          "Maggie Gyllenhaal",
          "Gary Oldman"
        ]
      },
      {
        id: 5,
        title: "Schindler's List",
        poster: "https://i.imgur.com/IWZJOmu.jpg",
        synopsis: "The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...",
        genres: [
          "Biography", "Drama", "History"
        ],
        year: 1993,
        director: "Steven Spielberg",
        actors: [
          "Liam Neeson",
          "Ben Kingsley",
          "Ralph Fiennes",
          "Caroline Goodall",
          "Jonathan Sagall",
          "Embeth Davidtz"
        ]
      }
    ]


    constructor() { }


    getMovies(){
      return this.moviesList;
    }

    getMovie(theId){
      const theMovie = this.moviesList.find((oneMovie)=>{
        return oneMovie.id === theId
      });
      return theMovie;
    }




}//end class
