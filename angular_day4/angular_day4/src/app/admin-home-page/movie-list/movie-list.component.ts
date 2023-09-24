import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('data telah ditambah');
  }
  ngOnDestroy(): void {
    console.log("data akan di delete");
  }

  ngOnInit(): void {
  }
  @Input() data: {
    imgUrl: string,
    title: string,
    director: string,
  }
  @Output() deleteData = new EventEmitter<void>();

  onDeleteClick() {
    this.deleteData.emit();
  }

}
