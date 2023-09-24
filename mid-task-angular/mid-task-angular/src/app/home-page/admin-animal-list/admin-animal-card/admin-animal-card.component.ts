import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminSharedService } from 'src/app/admin-shared/admin-shared.service';
import { AnimalType } from 'src/app/admin-shared/animal.type';


@Component({
  selector: 'app-admin-animal-card',
  templateUrl: './admin-animal-card.component.html',
  styleUrls: ['./admin-animal-card.component.css']
})
export class AdminAnimalCardComponent implements OnInit {
  @Input() animal: AnimalType;

  constructor(private adminSharedService : AdminSharedService ) { }

  ngOnInit(): void {
    console.log(this.animal)
  }

  @Output() deleteClicked = new EventEmitter<number>();

  deleteAnimal() {
    // Emit event dengan ID hewan yang akan dihapus
    this.deleteClicked.emit(this.animal.id); 
  }



  showDetail() {
    this.adminSharedService.updateSelectedAnimal(this.animal);

  }

}
