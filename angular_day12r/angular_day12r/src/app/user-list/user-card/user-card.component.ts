import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user 
  constructor() { }

  ngOnInit(): void {
  }

  @Output() deleteClicked = new EventEmitter<number>();

  deleteUser(){
    swal.fire({
      title: 'Konfirmasi',
      text: 'Anda yakin ingin menghapus card ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteClicked.emit(this.user.id);
      }
    });
    
  }

  
}
