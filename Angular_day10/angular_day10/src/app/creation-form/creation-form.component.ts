import { Component, OnInit } from '@angular/core';
import {BonsaiType} from '../shared-data/bonsai.type'
import {SharedDataService} from '../shared-data/shared-data.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, Form, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {
  bonsaiId: number
  willEditedData: BonsaiType
  myForm: FormGroup
  isSubmitDisabled : boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private sharedDataService :SharedDataService
  ) { 
    this.myForm = this.formBuilder.group({
      img: ['', Validators.required],
      // name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      name: ['', Validators.required],
      nickname: ['', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/) ]],
      species: ['', Validators.required],
      from: ['', Validators.required],
      stock: [0, [Validators.required, this.stockValidator]],
      // stock: [0, Validators.required],
      price: [0, Validators.required],
      document: this.formBuilder.array([]),
      includeItem: this.formBuilder.array([])
    })
  }


  ngOnInit(): void {
    const getParams = this.route.snapshot.params['id'];
    this.bonsaiId = parseInt(getParams);
    //  this.bandId = getParams
    console.log("ini Band Id", getParams)

    if (this.bonsaiId !== 0) {
      this.sharedDataService.getBonsaiById(this.bonsaiId).subscribe((bonsai) => {
        this.willEditedData = bonsai;
        console.log(this.willEditedData);
        this.myForm.patchValue(this.willEditedData);
        this.updateDocument(this.willEditedData.document);
        this.updateIncludeItem(this.willEditedData.includeItem); // Perubahan di sini
      });
    }

    this.myForm.controls['name'].valueChanges.subscribe((value) => {
      if (this.hasUniqueCharacterOrNumber(value)) {
      const sanitizedValue = this.sanitizeInput(value);
      console.log(sanitizedValue)
      this.myForm.controls['name'].patchValue(sanitizedValue, {emitEvent: false,});
      }
      });

    this.myForm.controls['nickname'].valueChanges.subscribe((value) => {
      if(this.hasUniqueCharacterOrNumber(value)){
        this.isSubmitDisabled = true;
      } else {
        this.isSubmitDisabled = false
      }
    })

      this.myForm.controls['nickname'].statusChanges.subscribe((newStatus) => {
        console.log('Status Formulir Berubah ke:', newStatus);
      });
    
  }

  addBonsai(){
    if(this.bonsaiId && this.bonsaiId !==0){
      if(this.myForm.valid && this.isSubmitDisabled === false){
        const updateBonsaiData: BonsaiType = {
          id: this.bonsaiId,
          ...this.myForm.value
        }
        this.sharedDataService.editBonsaiByid(this.bonsaiId, updateBonsaiData)
        this.router.navigate([''])
      }else{
        alert("Formulir tidak valid. Harap periksa isian Anda.")
      }
    }else{
      if(this.myForm.valid && this.isSubmitDisabled === false){
        const newBonsai: BonsaiType = {
          id: Date.now(),
          ...this.myForm.value
        }
        this.sharedDataService.addBonsai(newBonsai)
        this.router.navigate([''])
      } else {
        alert('Formulir tidak valid. Harap periksa isian Anda.')
      }
    }
  }
/////////////////////////////////////////////////////////////////////////////////////
get document() : FormArray{
  return this.myForm.get('document') as FormArray
}

  updateDocument(documentData : any[]): void {
    const documentArray = this.myForm.get('document') as FormArray
    documentData.forEach((documentData)=> {
      documentArray.push(this.createDocumentFormGroup(documentData))
    })
  }

  createDocumentFormGroup(documentData: any): FormGroup{
    return this.formBuilder.group({
      documentType: [documentData.documentType ||'', Validators.required],
      personName: [documentData.personName ||'', Validators.required],
      address: [documentData.address ||'', Validators.required],
      personId: [documentData.personId || '', Validators.required],
      email: [documentData.email ||'', [Validators.required, Validators.email]],
    })
  }

      // Add an address to the FormArray
      addDocument(): void {
        this.document.push(this.createDocumentFormGroup({}));
      }
    
      // Remove an address from the FormArray
      removeDocument(index: number): void {
        this.document.removeAt(index);
      }

///////////////////////////////////////////////////////////////////////////////////////
get includeItem() : FormArray{
  return this.myForm.get('includeItem') as FormArray
}

updateIncludeItem(includeItemData: any[]): void {
  const includeItemArray = this.myForm.get('includeItem') as FormArray;
  includeItemData.forEach((includeItemData) => {
    includeItemArray.push(this.createIncludeItemFormGroup(includeItemData));
  });
}


createIncludeItemFormGroup(includeItemData: any): FormGroup {
  return this.formBuilder.group({
    itemName: [includeItemData.itemName || '', Validators.required],
    material: [includeItemData.material || '', Validators.required],
    packaging: [includeItemData.packaging || '', Validators.required],
    useFor: [includeItemData.useFor || '', Validators.required],
    itemPrice: [includeItemData.itemPrice || '', Validators.required],
  });
}


  addIncludeItem():void{
    this.includeItem.push(this.createIncludeItemFormGroup({}))
  }
  
  removeIncludeItem(index: number): void {
    this.includeItem.removeAt(index)
  }

//////////////////////////////////////////////////////////////////////////////////

hasUniqueCharacterOrNumber(value: string): boolean {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/.test(value);
  }
  
sanitizeInput(value: string): string {
  return value.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/g, '');
  }

   // Fungsi stockValidator ditambahkan sebagai metode pribadi
   private stockValidator(control: AbstractControl): { [key: string]: any } | null {
    const stockValue = control.value;
    if (stockValue !== null && stockValue < 3) {
      return { 'stockTooLow': true };
    }
    return null;
  }
}


