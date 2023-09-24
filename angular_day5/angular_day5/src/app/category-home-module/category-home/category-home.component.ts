import { Component, OnInit } from '@angular/core';
import {DataSharedServiceService} from "../../shared-module/data-shared-service.service"
import { movieObject } from "../../shared-module/movie.type";

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  
  yourWatchedMovie : movieObject[] = []
  horrorMovie : movieObject[] = []
  actionMovie : movieObject[] = []
  dramaMovie : movieObject[] = []


  

  constructor(private dataService : DataSharedServiceService) {}

  ngOnInit(): void {
    this.yourWatchedMovie = this.dataService.getYourMovies()
    this.horrorMovie = this.dataService.getHorrorMovies()
    this.actionMovie = this.dataService.getActionMovies()
    this.dramaMovie =  this.dataService.getDramaMovies()

  }

  addMovie(movie : string){
    this.dataService.addYourMovie(movie)
    this.ngOnInit()
  }

  removeHistory(movie: string){
    this.dataService.movieHistoryRemove(movie)
    this.ngOnInit()
  }
}
