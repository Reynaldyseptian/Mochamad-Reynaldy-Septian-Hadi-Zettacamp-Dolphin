import { Injectable } from '@angular/core';
import {BandType} from "./band.type"
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditionSharedService {

  constructor() { }

   bandData : any = [
    {
      id: 1,
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Seringai.jpg',
      bandName: 'Seringai',
      manager: 'Edi Khemod',
      email: 'Seringai@example.com',
      addresses: [{
        address: '123 Main Street',
        city: 'New York',
        zipCode: 10001,
        country: 'Manhattan',
      }],
      genre: 'Rock',
      registerDate: '2023-09-21',
      payment: true,
      personnel: [{
        memberImg: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/09/Sammy-Bramantyo-IG.jpg',
        memberName:'Sammy',
        memberLastName: 'Brahmantyo',
        position:'Bassist',
        umur: 36
      },
     {
      memberImg: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2015/08/2253_19203_ARIAN-SERINGAI-2.jpg',
      memberName:'Arian',
      memberLastName: '13',
      position:'Vocalist',
      umur: 47
     },
     {
      memberImg: 'https://djarumcoklat.com/images/posts/news-thumb-110.jpg?v=2016',
      memberName:'Ricky',
      memberLastName: 'Siahan',
      position:'Guitarist',
      umur: 42
     },
    ]
    },
  ];

  private bandDataSubject = new BehaviorSubject<BandType[]>(this.bandData);
  private selectedbandSubject = new BehaviorSubject<BandType>(null)

  // selectedBand$ = this.selectedbandSubject.asObservable()
  // bandData$ = this.bandDataSubject.asObservable()
  
  getBandData(): Observable<BandType[]> {
    return this.bandDataSubject.asObservable();
  }

  getBandById(id: number): Observable<BandType> {
    return this.bandDataSubject.pipe(
      map((bands) => bands.find((band) => band.id === id))
    );
  }

  addBand(band: any) {
    this.bandData.push(band);
    this.bandDataSubject.next([...this.bandData]);
    console.log(this.bandData)
  }

  editBandDataById(id: number, updatedData: BandType) {
    // Find the band index in the bandData array
    const bandIndex = this.bandData.findIndex((band) => band.id === id);

    if (bandIndex !== -1) {
      // Update the band data at the specified index
      this.bandData[bandIndex] = {
        ...this.bandData[bandIndex], // Keep existing properties
        ...updatedData // Update with new properties
      };

      // Notify subscribers of the updated data
      this.bandDataSubject.next([...this.bandData]);
    }
  }
}
