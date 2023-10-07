import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
  @Input() album : any
  constructor() { }

  ngOnInit(): void {
  }

  @Output() buyClicked = new EventEmitter<number>();

  buyAlbum(){
    this.buyClicked.emit(this.album.id)
  }
}
