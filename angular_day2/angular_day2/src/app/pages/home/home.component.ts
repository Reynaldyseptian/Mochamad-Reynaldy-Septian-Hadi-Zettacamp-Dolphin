import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // two way
  userName: string = ''

  // string interpolation
  category = 'Trending Movie'

  // movie list to displat at the card
  movieList : any = [
    {
      title: "One Piece",
      pesan: "Unwatched",
      imgUrl:"https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png",
    },
    {
      title: "Naruto",
      pesan: "Unwatched",
      imgUrl:"https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Jujutsu Kaizen",
      pesan: "Unwatched",
      imgUrl:"https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    },
    {
      title: "Kimetsu No Yaiba",
      pesan: "Unwatched",
      imgUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/2ZfAUG5CTXdM34S1OhmMW1zF.jpg",
    },

  ]

  addMovie(){
    
  }

  onButtonClick(index: number) {
    this.movieList[index].pesan = 'Watched';
  }


  // ng Style
  textColor = 'black'; // Warna teks awal

  changeTextColor() {
    // Mengubah warna teks menjadi merah saat diklik
    this.textColor = 'red';
  }
}

