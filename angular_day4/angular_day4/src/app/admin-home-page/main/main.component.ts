import { Component, OnInit } from '@angular/core';
import { AdminHomeServiceService } from '../admin-home-service.service';
import { movieObject } from "../movie.type";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movieList = []


  constructor(private dataAdmin : AdminHomeServiceService) { }

  ngOnInit(): void {
    this.movieList = this.dataAdmin.getData()
  }

  

  onDeleteData(movieTitle: string) {
    // const index = this.movieList.findIndex(movie => movie.title === movieTitle);
    // if (index !== -1) {
    //   this.movieList.splice(index, 1);
    // }

    this.dataAdmin.deleteData(movieTitle)
  }

  addMovie(movie: movieObject){
    // this.movieList.push(movie)
    this.dataAdmin.addData(movie)
  }
}

