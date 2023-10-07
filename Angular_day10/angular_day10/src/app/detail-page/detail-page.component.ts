import { Component, OnInit } from '@angular/core';
import {BonsaiType} from '../shared-data/bonsai.type'
import {SharedDataService} from '../shared-data/shared-data.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  bonsaiDetail : BonsaiType
  bonsaiId: number
  constructor(
    private sharedDataService :SharedDataService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    let getParams = this.route.snapshot.params['id']
    let id: number = parseInt(getParams)
    this.bonsaiId = id
    this.sharedDataService.getBonsaiById(this.bonsaiId).subscribe((data)=>{
      this.bonsaiDetail = data
    })
    console.log(this.bonsaiDetail)
  }

  deleteBonsai(id: number): void {
    this.sharedDataService.deleteBonsaiById(id); 
    this.router.navigate(['']);
  }
}
