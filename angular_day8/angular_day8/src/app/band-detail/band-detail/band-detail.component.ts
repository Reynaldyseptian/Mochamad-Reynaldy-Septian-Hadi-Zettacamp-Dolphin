import { Component, OnInit } from '@angular/core';
import {BandType} from '../../audition-shared/band.type'
import { AuditionSharedService } from 'src/app/audition-shared/audition-shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  selectedBand : BandType

  constructor(
    private route: ActivatedRoute,
    private auditionSharedService : AuditionSharedService
  ) { }

  ngOnInit(): void {
    let getParams = this.route.snapshot.params['id']
    let id: number = parseInt(getParams)
    console.log(typeof id, "params")

    this.auditionSharedService.getBandById(id).subscribe((band) => {
      this.selectedBand = band;
    });
    console.log(this.selectedBand)
  }

}
