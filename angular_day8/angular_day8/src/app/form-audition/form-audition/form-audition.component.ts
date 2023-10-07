import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';
import { BandType } from '../../audition-shared/band.type';
import { AuditionSharedService } from 'src/app/audition-shared/audition-shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-audition',
  templateUrl: './form-audition.component.html',
  styleUrls: ['./form-audition.component.css']
})
export class FormAuditionComponent implements OnInit {
  bandId: any;
  willEditedData: BandType;

  myForm: FormGroup;

  constructor(
    private auditionSharedService: AuditionSharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myForm = this.formBuilder.group({
      bandName: [null, Validators.required],
      manager: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.formBuilder.array([]), // FormArray for addresses
      genre: ['', Validators.required],
      registerDate: ['', Validators.required],
      payment: [false, Validators.required],
      img: ['', Validators.required],
      personnel: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    // const id = this.activeRouter.snapshot.queryParamMap.get('id');
    // this.isEdit = id != null;
    const getParams = this.route.snapshot.params['id'];
    this.bandId = parseInt(getParams);
    //  this.bandId = getParams
    console.log("ini Band Id", getParams)

    if (this.bandId !== 0) {
      this.auditionSharedService.getBandById(this.bandId).subscribe((band) => {
        this.willEditedData = band;
        this.myForm.patchValue(this.willEditedData);
        this.updateAddresses(this.willEditedData.addresses);
        this.updatePersonnel(this.willEditedData.personnel)
      });
    }
  }


  addBand() {
    if (this.bandId && this.bandId !== 0) {
      if (this.myForm.valid) {
        const updatedBandData: BandType = {
          id: this.bandId,
          ...this.myForm.value
        };

        this.auditionSharedService.editBandDataById(this.bandId, updatedBandData);
        this.router.navigate(['']);
      } else {
        alert('Formulir tidak valid. Harap periksa isian Anda.');
      }
    } else {
      if (this.myForm.valid) {
        const newBand: BandType = {
          id: Date.now(),
          ...this.myForm.value
        };

        this.auditionSharedService.addBand(newBand);
        this.router.navigate(['']);
      } else {
        alert('Formulir tidak valid. Harap periksa isian Anda.');
      }
    }
  }
///////////////////////////////////////////////////////////////////////////////////////////////
    // Getter for the addresses FormArray
    get addresses(): FormArray {
      return this.myForm.get('addresses') as FormArray;
    }  
    // Helper method untuk mengisi FormArray addresses dengan data yang ada
  updateAddresses(addressesData: any[]): void {
    const addressesArray = this.myForm.get('addresses') as FormArray;
    addressesData.forEach((addressData) => {
      addressesArray.push(this.createAddressFormGroup(addressData));
    });
  }    

// Helper method untuk membuat FormGroup alamat dengan data awal
    createAddressFormGroup(addressData: any): FormGroup {
      return this.formBuilder.group({
        address: [addressData.address || '', Validators.required],
        city: [addressData.city || '', Validators.required],
        zipCode: [addressData.zipCode || 0, Validators.required],
        country: [addressData.country || '', Validators.required],
      });
    }
  
    // Add an address to the FormArray
    addAddress(): void {
      this.addresses.push(this.createAddressFormGroup({}));
    }
  
    // Remove an address from the FormArray
    removeAddress(index: number): void {
      this.addresses.removeAt(index);
    }

////////////////////////////////////////////////////////////////////////////////////////////////

get personnel(): FormArray {
  return this.myForm.get('personnel') as FormArray
}
updatePersonnel(personnelData: any[]): void {
  const personnelArray = this.myForm.get('personnel') as FormArray
  personnelData.forEach((personnelData)=>{
    personnelArray.push(this.createPersonnelFormGroup(personnelData))
  })
}

createPersonnelFormGroup(personnelData: any): FormGroup {
  return this.formBuilder.group({
    memberName: [personnelData.memberName || '', Validators.required],
    position: [personnelData.position || '', Validators.required],
    memberImg: [personnelData.memberImg || '', Validators.required],
    memberLastName: [personnelData.memberLastName || '', Validators.required],
    umur: [personnelData.umur || 0, Validators.required]
  })
}

addPersonnel():void{
  this.personnel.push(this.createPersonnelFormGroup({}))
}

removePersonnel(index: number): void {
  this.personnel.removeAt(index)
}

}
