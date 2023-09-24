import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() inputMessage: string;
  message: string = '';

  constructor() {
    console.log('Constructor: Komponen sedang dibuat.');
  }

  ngOnInit() {
    console.log('ngOnInit: Komponen telah diinisialisasi.');
    this.message = 'Komponen telah diinisialisasi.';
  }

  ngOnChanges() {
    console.log('ngOnChanges: Input berubah.');
    this.message = 'Input berubah: ' + this.inputMessage;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View telah dimuat.');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Komponen akan dihancurkan.');
  }

  triggerOnChanges() {
    // Panggil metode ngOnChanges secara manual
    this.ngOnChanges();
  }

  triggerOnDestroy() {
    // Panggil metode ngOnDestroy secara manual
    this.ngOnDestroy();
  }
}
