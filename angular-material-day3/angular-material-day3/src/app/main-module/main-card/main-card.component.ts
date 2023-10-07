import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input() user : any
  civility : string


  constructor() { }

  @Output() editClicked = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.user)
    if(this.user.civility === 'netral'){
      this.civility = ''
    }else{
      this.civility = this.user.civility
    }
  }

  editUser(){
    swal.fire({
      title: 'Konfirmasi',
      text: 'Anda yakin ingin mengedit card ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Edit',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        this.editClicked.emit(this.user);
      }
    });
  }

}
