import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mid-task-angular';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#05542E'
      }
    }else
    {
        this.navbg = {}
    }
  }

  ads: string[] = [
    "https://tamansafari.com/uploads/banner/165035412939BANNER_TSI.jpg",
    "https://tamansafari.com/uploads/banner/165891545715WEB_BANNER_NEWSLETTER_II-01.jpg",
    
  ]
}
