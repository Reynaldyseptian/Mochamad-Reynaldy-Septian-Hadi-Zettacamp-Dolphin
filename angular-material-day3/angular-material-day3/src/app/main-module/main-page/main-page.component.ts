import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service/data-service.service';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { MainFormComponent, openAddUserDialog, openEditDialog } from '../main-form/main-form.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userList : any[]

  constructor(
    private dataServiceService : DataServiceService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataServiceService.users$.subscribe((user)=>{
      this.userList = user
      console.log("userList", this.userList)
    })
  }

  // addUser() {
  //   openAddUserDialog(this.matDialog)
  //     .pipe(filter((val) => !!val))
  //     .subscribe((val) => this.dataServiceService.addUser(val));
  //   console.log(this.userList);
  // }

  addUser() {
    openAddUserDialog(this.matDialog).pipe(filter((val) => !!val)).subscribe((val) => {
      this.dataServiceService.addUser(val);
    });
  }
  

  editUser(userToEdit: any) {
    // this.matDialog.open(MainFormComponent,{
    //   data : userToEdit
    // } )
    console.log(userToEdit, "ini data yang akan di edit")
    openEditDialog(this.matDialog, userToEdit).pipe(filter((editedUser) => !!editedUser)).subscribe((editedUser) => {
      this.dataServiceService.editUser(editedUser);
    });
  }
}


