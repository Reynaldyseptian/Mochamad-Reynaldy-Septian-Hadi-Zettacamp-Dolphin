import { Component, OnInit } from '@angular/core';
import { DataSharedServiceService } from 'src/app/shared-module/data-shared-service.service';
import {movieObject} from "../../shared-module/movie.type"
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  movieList: movieObject[] = []
  yourWatchedMovie: movieObject[] = []

  constructor(private dataService : DataSharedServiceService) {}

  ngOnInit(): void {
    this.dataService.getMovieData().subscribe((movies: movieObject[]) => {
      this.movieList = movies;
      this.yourWatchedMovie = this.dataService.getYourMovies()
    });
  }

  removeHistory(movie: string){
    this.dataService.movieHistoryRemove(movie)
    this.ngOnInit()
  }
}
