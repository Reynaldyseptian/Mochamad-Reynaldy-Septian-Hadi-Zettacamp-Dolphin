import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BonsaiType } from 'src/app/shared-data/bonsai.type';
import swal from 'sweetalert2';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() bonsai : BonsaiType
  constructor(
  ) { }

  ngOnInit(): void {
  }

  @Output() deleteClicked = new EventEmitter<number>();

  deleteBonsai() {
    swal.fire({
      title: 'Konfirmasi',
      text: 'Anda yakin ingin menghapus card ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteClicked.emit(this.bonsai.id);
      }
    });
  //   const isConfirmed = window.confirm('Anda yakin ingin menghapus card ini?')
  //   if(isConfirmed){
  //     this.deleteClicked.emit(this.bonsai.id);
  //   }
  }

}
