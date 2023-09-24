import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class AddMovieComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(): void {
  //   alert("Data Tabel Akan Ditambah")
  //   this.resetForm();
  // }

  ngOnChanges(): void {

    alert("Data Tabel Akan Ditambah")
  }

  @Output() addMovieEvent = new EventEmitter<any>();


  movie: {
    imgUrl: string,
    title: string,
    director: string,
  } = {
    imgUrl: '',
    title: '',
    director: '',
  };

  addMovie(imgUrlInput: HTMLInputElement, titleInput: HTMLInputElement, directorInput: HTMLInputElement): void {
    
    this.movie.imgUrl = imgUrlInput.value;
    this.movie.title = titleInput.value;
    this.movie.director = directorInput.value;

    this.addMovieEvent.emit({ ...this.movie }); // Mengirim data film sebagai peristiwa (duplikasi objek)
    this.ngOnChanges()
    this.resetForm();
  }

  resetForm(): void {
    this.movie = {
      imgUrl: '',
      title: '',
      director: '',
    };
  }

}