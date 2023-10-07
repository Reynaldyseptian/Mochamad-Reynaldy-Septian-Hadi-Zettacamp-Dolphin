import { Component, OnInit, Input } from '@angular/core';
import {BandType} from '../../audition-shared/band.type'
import { AuditionSharedService } from 'src/app/audition-shared/audition-shared.service';
@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.css']
})
export class BandCardComponent implements OnInit {
  @Input() band : BandType

  constructor() { }

  ngOnInit(): void {
  }

}
