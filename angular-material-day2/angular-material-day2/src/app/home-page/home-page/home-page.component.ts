import { Component, OnInit,  AfterViewInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from 'src/app/data-service/data-service.service';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  dataList : any[] = []
  dataSource = new MatTableDataSource<any>([])
  nameSearchTerm : string
  userTypeSearchTerm : string
  emailSearchTerm : string



  constructor(private dataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.dataServiceService.data$.subscribe((data) => {
      this.dataList = data;
      this.dataSource.data = this.dataList;
    });
  }

  displayedColumns: string[] = ['name', 'user_type', 'email', 'status']


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit(): void {
    // Menghubungkan MatSort dengan tabel
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  sortData(event: any): void {
    const property = event.active;
    const direction = event.direction;

    if (direction === '') {
      // Reset sorting
      this.dataSource.data = this.dataList;
    } else {
      // Sorting
      this.dataSource.data = this.dataList.slice().sort((a, b) => {
        const isAsc = direction === 'asc';
        switch (property) {
          case 'name':
            return this.compare(a.last_name, b.last_name, isAsc);
          case 'user_type':
            return this.compare(a.company.user_type, b.company.user_type, isAsc);
          case 'email':
            return this.compare(a.email, b.email, isAsc);
          case 'status': 
            return this.compare(a.user_status, b.user_status, isAsc)
          default:
            return 0;
        }
      });
    }
  }

  compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  

  // searchName(): void {
  //   this.dataServiceService.filterNameData(this.nameSearchTerm).subscribe((filteredData)=>{
  //     this.dataSource.data = filteredData
  //   })
  // }
  searchName(): void {
    this.searchDataByProperty(this.nameSearchTerm, 'last_name')
  }

  searchUserType(){
    this.dataServiceService.filterUserTypeData(this.userTypeSearchTerm).subscribe((filteredData)=>{
      this.dataSource.data = filteredData
    })
  }

  searchEmail(): void {
    this.searchDataByProperty(this.emailSearchTerm, 'email')
  }

  searchStatus(status: string):void{
     this.searchDataByProperty(status, 'user_status')
  }
  
  searchDataByProperty(searchTerm: string, searchProperty: string): void {
    if (searchTerm && searchTerm.trim() !== "") {
      this.dataServiceService.filterData(searchTerm, searchProperty).subscribe((filteredData) => {
        this.dataSource.data = filteredData;
      });
    } else {
      this.dataSource.data = this.dataList;
    }
  }


}
