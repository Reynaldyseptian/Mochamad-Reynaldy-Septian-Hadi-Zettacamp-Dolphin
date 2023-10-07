import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management/user-management.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList : any[]
  constructor( private userManagementService : UserManagementService) { }

  ngOnInit(): void {
    this.userManagementService.dummyUserData$.subscribe((user)=>{
      this.userList = user
      console.log(this.userList)
    })
  }

  deleteUser(id: number) {
    this.userManagementService.deleteUser(id).subscribe(
      () => {
        console.log(`Pengguna dengan ID ${id} berhasil dihapus.`);
        // Sekarang item telah dihapus dari dummyData, Anda dapat melakukan tindakan lain yang diperlukan.
      },
      (error) => {
        console.error('Gagal menghapus pengguna:', error);
      }
    );
  }

}
