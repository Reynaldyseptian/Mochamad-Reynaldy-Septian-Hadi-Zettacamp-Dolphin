import { Component, OnInit } from '@angular/core';
import { AdminSharedService } from 'src/app/admin-shared/admin-shared.service';
import { AnimalType } from 'src/app/admin-shared/animal.type';

@Component({
  selector: 'app-admin-animal-list',
  templateUrl: './admin-animal-list.component.html',
  styleUrls: ['./admin-animal-list.component.css']
})
export class AdminAnimalListComponent implements OnInit {

  animalList: AnimalType[] = [];

  constructor(private adminSharedService: AdminSharedService) {}

  ngOnInit() {
    this.adminSharedService.getAnimalData().subscribe((data) => {
      this.animalList = data;
    });
  }

  deleteAnimal(animalId: number) {
    // Hapus hewan dari data dan perbarui AdminSharedService
    const indexToDelete = this.animalList.findIndex((animal) => animal.id === animalId);
    if (indexToDelete !== -1) {
      this.animalList.splice(indexToDelete, 1);
      this.adminSharedService.updateAnimalData(this.animalList); // Anda perlu menambahkan metode updateAnimalData() pada AdminSharedService
    }
  }



}
