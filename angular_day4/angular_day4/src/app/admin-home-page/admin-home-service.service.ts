import { Injectable } from '@angular/core';
import {movieObject} from './movie.type'
 
@Injectable({
  providedIn: 'root'
})
export class AdminHomeServiceService {

  constructor() { }

   private allMovieData : movieObject[] = [ {
    title: "One Piece",
    director: "Oda",
    imgUrl:"https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png",
  },
  {
    title: "Naruto",
    director: "Masashi Kisimoto",
    imgUrl:"https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Jujutsu Kaizen",
    director: "Unknown",
    imgUrl:"https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    title: "Kimetsu No Yaiba",
    director: "Haruo Sotozaki",
    imgUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/2ZfAUG5CTXdM34S1OhmMW1zF.jpg",
  },]

  getData(): movieObject[]{
    return this.allMovieData
  }

  addData(newMovie: movieObject): void{
    this.allMovieData.push(newMovie)
  }

  deleteData(movieTitle : string): void{
    const index = this.allMovieData.findIndex(movie => movie.title === movieTitle);
    this.allMovieData.splice(index, 1);
  }

}
