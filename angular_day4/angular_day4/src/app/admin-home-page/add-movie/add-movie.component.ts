import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { movieObject } from '../movie.type';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addMovieEvent = new EventEmitter<any>();

  @ViewChild('imgUrlInput') imgUrlInput!: ElementRef<HTMLInputElement>;
  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('directorInput') directorInput!: ElementRef<HTMLInputElement>;

  movie: movieObject = {
    imgUrl: '',
    title: '',
    director: '',
  };

  addMovie(): void {
    this.movie.imgUrl = this.imgUrlInput.nativeElement.value;
    this.movie.title = this.titleInput.nativeElement.value;
    this.movie.director = this.directorInput.nativeElement.value;

    this.addMovieEvent.emit({ ...this.movie });
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
