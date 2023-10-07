import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  userData : any =  [
    {
      id: 1,
      firstname: "Reynaldy",
      lastname: "Septian",
      gender: "Male",
      birth: "Tue Oct 03 2023 12:37:59 GMT+0700 (Western Indonesia Time)", 
      civility: "netral"
    },
    {
      id: 2,
      firstname: "Asyrof",
      lastname: "Udin",
      gender: "Male",
      birth: "Tue Oct 03 2023 12:37:59 GMT+0700 (Western Indonesia Time)",
      civility: "Mr"
    },
    {
      id: 3,
      firstname: "Guntur",
      lastname: "Petir",
      gender: "Male",
      birth: "Tue Oct 03 2023 12:37:59 GMT+0700 (Western Indonesia Time)",
      civility: "Mr"
    },
    {
      id: 4,
      firstname: "Ari",
      lastname: "Johan",
      gender: "Male",
      birth: "Tue Oct 03 2023 12:37:59 GMT+0700 (Western Indonesia Time)",
      civility: "Mr"
    },
    {
      id: 5,
      firstname: "Ayana",
      lastname: "Shahab",
      gender: "Female",
      birth: "Tue Oct 03 2023 12:37:59 GMT+0700 (Western Indonesia Time)",
      civility: "Ms"
    }
  ]
  users = new BehaviorSubject<any[]>(this.userData);
  users$ = this.users.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {
    // this.fetchUsersData().subscribe((data) => this.users.next(data));
  }

  fetchUsersData() {
    return this.httpClient.get<any>('../../../assets/users.json');
  }

  addUser(data: any) {
    let tempUsers = this.getAllUsersData();
    tempUsers.push(data);
    this.setAllUsersData(tempUsers);
  }

  editUser(editedUser: any) {
    let tempUsers = this.getAllUsersData();
    const index = tempUsers.findIndex(user => user.id === editedUser.id);

    if (index !== -1) {
      tempUsers[index] = editedUser;
      this.setAllUsersData(tempUsers);
    }
  }

  getAllUsersData(): any[] {
    return this.users.getValue();
  }

  setAllUsersData(data: any[]) {
    this.users.next(data);
  }
}
