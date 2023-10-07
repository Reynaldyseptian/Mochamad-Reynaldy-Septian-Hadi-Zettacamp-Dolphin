import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/data-service/data-service.service';
import Swal from 'sweetalert2';




export interface DialogData {
  firstname: string;
  lastname: string;
  gender: string;
  birth: Date;
  civility: string;
}

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  userForm = this.fb.group({
    firstname: this.fb.control(null, Validators.required),
    lastname: this.fb.control(null, Validators.required),
    gender: this.fb.control(null, Validators.required),
    birth: this.fb.control(new Date(), Validators.required),
    // birth: this.fb.control(null, Validators.required),
    civility: this.fb.control(null, Validators.required),
  });

  constructor(
    private dataServiceService : DataServiceService,
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<MainFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      const birthDate = new Date(this.data.birth);
      this.userForm.patchValue({
        ...this.data,
        birth: birthDate
      });
    }
  }
  

  onClose() {
    this.matDialogRef.close();
  }

  onAddOrEdit() {
    if (this.userForm.valid) {
      if (!this.data) {
        // Mode "Add"
        const newUser: any = {
          id: Date.now(),
          ...this.userForm.value
        };

        this.matDialogRef.close(newUser);
        Swal.fire('User Added', 'You just Added the user', 'success');
      } else {
        // Mode "Edit"
        const editedUser: any = {
          ...this.data,
          ...this.userForm.value
        };
        // this.dataServiceService.editUser(editedUser);
        this.matDialogRef.close(editedUser);
       
        Swal.fire('User Edited', 'You just Edited the user', 'success');
      }
    } else {
      Swal.fire('User Error', 'Please input valid data', 'warning');
    }
  }
}

export function openAddUserDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = matDialog.open(MainFormComponent, config);

  return dialogRef.afterClosed();
}

export function openEditDialog(matDialog: MatDialog, data: DialogData) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;
  config.data = data;

  return matDialog.open(MainFormComponent, config).afterClosed();
}