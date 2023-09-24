import { Component, OnInit } from '@angular/core';
import { AdminSharedService } from 'src/app/admin-shared/admin-shared.service';
import { AnimalType } from 'src/app/admin-shared/animal.type';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-animal-form',
  templateUrl: './admin-animal-form.component.html',
  styleUrls: ['./admin-animal-form.component.css']
})
export class AdminAnimalFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private adminSharedService: AdminSharedService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      animalName: ['', Validators.required],
      nickName: ['', Validators.required],
      umur: [0, Validators.required],
      habitat: ['', Validators.required],
      asalNegara: ['', Validators.required],
      isMamalia: [false, Validators.required],
      img: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addAnimal() {
    if (this.myForm.valid) {
      const newAnimal: AnimalType = {
        id: Math.floor(Math.random() * 1000), // Menghasilkan ID secara acak
        ...this.myForm.value // Mengambil semua nilai dari myForm
      };

      this.adminSharedService.addAnimal(newAnimal);

      this.myForm.reset({
        isMamalia: false,
        umur: 0,
      });
    } else {
      alert('Formulir tidak valid. Harap periksa isian Anda.');
    }
  }
}
