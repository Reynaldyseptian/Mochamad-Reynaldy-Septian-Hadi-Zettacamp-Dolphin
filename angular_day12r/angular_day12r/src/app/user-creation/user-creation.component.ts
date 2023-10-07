import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management/user-management.service';


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  userId : number
  willEditedData : any
  myForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userManagementService: UserManagementService
  ) { 
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
        geo: this.formBuilder.group({
          lat: [''],
          lng: [''],
        }),
      }),
      phone: [''],
      website: [''],
      company: this.formBuilder.group({
        name: [''],
        catchPhrase: [''],
        bs: [''],
      }),
    });
  }

  ngOnInit(): void {
    const getParams = this.route.snapshot.params['id']
    this.userId = parseInt(getParams)

    if(this.userId !==0){
      this.userManagementService.getUserDataById(this.userId).subscribe((user)=>{
        this.willEditedData = user
        console.log(this.willEditedData)
        this.myForm.patchValue(this.willEditedData)
      })
    }
  }

  onSubmit() {
    if (this.userId && this.userId !== 0) {
      if (this.myForm.valid) {
        const updateUserData: any = {
          id: this.userId,
          ...this.myForm.value
        };
        console.log(updateUserData);

          this.userManagementService.editUser(updateUserData).subscribe(
            () => {
              console.log('Pengguna berhasil diperbarui.');
              this.router.navigate(['']);
            },
            (error) => {
              console.error('Gagal memperbarui pengguna:', error);
              alert('Gagal memperbarui pengguna. Harap coba lagi.');
            }
          );
        
      } else {
        alert('Formulir tidak valid. Harap periksa isian Anda.');
      }
    } else {
      if (this.myForm.valid) {
        const newUser: any = {
          id: Date.now(),
          ...this.myForm.value
        };
  
        this.userManagementService.addUser(newUser).subscribe(
          () => {
            console.log('Pengguna berhasil ditambahkan.');
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Gagal menambahkan pengguna:', error);
            alert('Gagal menambahkan pengguna. Harap coba lagi.');
          }
        );
      } else {
        alert('Formulir tidak valid. Harap periksa isian Anda.');
      }
    }
  }
  
}
