import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management/user-management.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail : any
  userId: number
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private userManagementService: UserManagementService
    ) { }

  ngOnInit(): void {
    let getParams = this.route.snapshot.params['id']
    let id: number = parseInt(getParams)
    this.userId = id
    this.userManagementService.getUserDataById(this.userId).subscribe((data)=>{
      this.userDetail = data
    })
    console.log(this.userDetail)
  }

  deleteUser(id: number): void {
    this.userManagementService.deleteUser(id); 
    this.router.navigate(['']);
  }



}
