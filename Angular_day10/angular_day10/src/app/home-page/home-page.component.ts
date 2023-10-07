import { Component, OnInit } from '@angular/core';
import {BonsaiType} from '../shared-data/bonsai.type'
import {SharedDataService} from '../shared-data/shared-data.service'



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bonsaiList : BonsaiType[]
  searchTerm: string
  constructor(private sharedDataService :SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.getBonsaiData().subscribe((data)=>{
      this.bonsaiList = data
      console.log(this.bonsaiList)
    })
  }

  deleteBonsai(id: number): void {
    this.sharedDataService.deleteBonsaiById(id); 
  }

  searchBonsai(): void {
    this.sharedDataService.filterBonsaiData(this.searchTerm).subscribe((filteredBonsaiList) => {
      this.bonsaiList = filteredBonsaiList;
    });
  }

}
