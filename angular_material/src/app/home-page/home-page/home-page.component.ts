import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service/data-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  albumData : any
  constructor(
    private dataServiceService : DataServiceService
  ) { }

imgCover: string = "https://media.stubhubstatic.com/stubhub-v2-catalog/d_defaultLogo.jpg/q_auto:low,f_auto,c_fill,g_auto,w_1200,h_300/categories/51187/6348922";
changeImgCover(id: number) {
  const imgOne : string = "https://media.stubhubstatic.com/stubhub-v2-catalog/d_defaultLogo.jpg/q_auto:low,f_auto,c_fill,g_auto,w_1200,h_300/categories/51187/6348922"
  const imgTwo : string = "https://lh3.googleusercontent.com/innRziTAUZqSUbGCUnh1kpZBrGLj-pJh1IHw0TSZmRpi_8qbsjahUx7ek_UfIFfzjt2gD23O9fqjqLs=w2000-h833-p-l90-rj"

  if(id === 1){
    this.imgCover = imgOne
  } else {
    this.imgCover = imgTwo
  }
 
}

  ngOnInit(): void {
    this.dataServiceService.getAlbumData().subscribe((data)=>{
      this.albumData = data
      console.log(this.albumData);
    })
  }

  buyAlbum(id: number){
    this.dataServiceService.buyAlbum(id)
  }

}
