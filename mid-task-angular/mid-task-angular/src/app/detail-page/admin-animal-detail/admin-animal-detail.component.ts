import { Component, OnInit } from '@angular/core';
import { AdminSharedService } from 'src/app/admin-shared/admin-shared.service';
import { AnimalType } from 'src/app/admin-shared/animal.type';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-admin-animal-detail',
  templateUrl: './admin-animal-detail.component.html',
  styleUrls: ['./admin-animal-detail.component.css']
})
export class AdminAnimalDetailComponent implements OnInit {

  selectedAnimal: AnimalType


  constructor(private adminSharedService: AdminSharedService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.adminSharedService.selectedAnimal$.subscribe((animal) => {
    //   this.selectedAnimal = animal;
    //   console.log(this.selectedAnimal); 
    // });

    // let getParams = this.route.snapshot.paramMap.get('id')
    let getParams = this.route.snapshot.params['id']
    let id: number = parseInt(getParams)
    console.log(typeof id, "params")

    this.adminSharedService.getAnimalById(id).subscribe((animal) => {
      this.selectedAnimal = animal;
    });
    
  }
  clickButt() {}
}

