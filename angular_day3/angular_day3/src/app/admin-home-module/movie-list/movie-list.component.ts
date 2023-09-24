import { Component, OnInit, OnDestroy, OnChanges, Input, ViewEncapsulation, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieListComponent implements OnInit, OnDestroy {

  @Input() movieList: {
    imgUrl: string,
    title: string,
    director: string,
  }[] = [] ; // Deklarasikan properti movieList
  @Output() deleteMovieEvent = new EventEmitter<number>(); // Mengirimkan indeks film yang akan dihapus
 

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("test test")
    alert('ngOnDestroy: Komponen akan dihancurkan.');
  }


  onButtonClick(movieIndex: number) {
    this.ngOnDestroy()
    this.deleteMovieEvent.emit(movieIndex); // Emit event dengan indeks film yang akan dihapus
  }

}