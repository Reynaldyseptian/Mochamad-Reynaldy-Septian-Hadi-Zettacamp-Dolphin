import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service/data-service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  dataId : number
  albumData : any
  dataSource : any
  constructor(
    private dataServiceService : DataServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let getParams = this.route.snapshot.params['id']
    let id: number = parseInt(getParams)
    this.dataId = id
    this.dataServiceService.getDataById(this.dataId).subscribe((data)=>{
      this.albumData = data
      this.dataSource = data.songs
      console.log(this.albumData);
    })
  }

  displayedColumns: string[] = ['title', 'duration', 'genre'];

  convertToMinutesAndSeconds(durationInSeconds: number): string {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedDuration;
  }
}
