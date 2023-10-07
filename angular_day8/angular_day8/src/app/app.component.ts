import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_day8';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#191717'
      }
    }else
    {
        this.navbg = {}
    }
  }

  ads: string[] = [
    "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230411010255_64344f4f3ab19.jpg",
    "https://pophariini.com/wp-content/uploads/2022/03/satu-per-empat-01.png",
    "https://d5vna1c75x8sk.cloudfront.net/wp-content/uploads/2022/05/ADV-kompasid-BonCabe-X-BNI-Java-Jazz-Festival-2022.jpg"

  ]
}
