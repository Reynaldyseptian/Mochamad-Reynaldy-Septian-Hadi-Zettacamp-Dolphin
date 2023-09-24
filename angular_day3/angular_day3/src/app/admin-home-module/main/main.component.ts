import { Component, Input, ViewEncapsulation,OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MainComponent implements OnInit, AfterViewInit{
  constructor() {
   }

  ngOnInit(): void {
    alert("OnInit: Main component telah diinisiasi")
    console.log("OnInit: Main component telah diinisiasi");
    
  }
  
  ngAfterViewInit(): void {
    alert("Komponen akan di render")
    console.log("Komponen akan di render")
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   alert("telah ditambahkan")
  // }

  movieList = [ {
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

  addMovie(movie: {
    imgUrl: string,
    title: string,
    director: string,
  }){
    this.movieList.push(movie)
  }


  deleteMovie(movieIndex: number) {
    if (movieIndex >= 0 && movieIndex < this.movieList.length) {
      this.movieList.splice(movieIndex, 1);

    }
  }
}