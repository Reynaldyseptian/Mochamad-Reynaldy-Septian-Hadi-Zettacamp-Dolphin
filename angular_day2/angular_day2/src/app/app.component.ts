import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_day2';
  isDisabled = false; // Kondisi awal, tombol aktif

  IsDisabled(){
    this.isDisabled = true
    console.log(this.isDisabled); 
  }

}
