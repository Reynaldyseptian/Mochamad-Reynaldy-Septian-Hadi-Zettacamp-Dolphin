import { Component, OnInit } from '@angular/core';
import {BandType} from '../../audition-shared/band.type'
import { AuditionSharedService } from 'src/app/audition-shared/audition-shared.service';


@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bandList : BandType[]
  constructor(private auditionSharedService:AuditionSharedService) { }

  ngOnInit(): void {
    this.auditionSharedService.getBandData().subscribe((data) => {
      this.bandList = data;
    });
  }

}
