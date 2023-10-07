import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  albumData: any = [
    {
      id: 1,
      img: "https://i0.wp.com/themusicalhype.com/wp-content/uploads/2017/08/daniel-caesar-freudian-golden-child-recordings.jpg?fit=500%2C500&ssl=1&resize=350%2C200",
      artist: "Daniel Caesar",
      album: "Freudian",
      price: 100,
      about: "Album ini adalah salah satu karya terbaik Daniel Caesar dengan vokal yang mengesankan dan musik yang mendalam.",
      songs: [
        {
          title: 'Get You',
          duration: 242, // Durasi dalam detik
          genre: 'R&B',
        },
        {
          title: 'Best Part',
          duration: 208,
          genre: 'R&B',
        },
        {
          title: 'Hold Me Down',
          duration: 206,
          genre: 'R&B',
        },
        {
          title: 'Neu Roses (Transgressor’s Song)',
          duration: 213,
          genre: 'R&B',
        },
        {
          title: 'Loose',
          duration: 209,
          genre: 'R&B',
        },
        {
          title: 'We Find Love',
          duration: 185,
          genre: 'R&B',
        },
        {
          title: 'Blessed',
          duration: 196,
          genre: 'R&B',
        },
        {
          title: 'Take Me Away (ft. Syd)',
          duration: 220,
          genre: 'R&B',
        },
        {
          title: 'Transform (ft. Charlotte Day Wilson)',
          duration: 218,
          genre: 'R&B',
        },
        {
          title: 'Freudian',
          duration: 202,
          genre: 'R&B',
        }
      ]
    },    
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Daniel_Caesar_-_Case_Study_01.png",
      artist: "Daniel Caesar",
      album: "Case Study 01",
      price: 120,
      about: "Case Study 01 adalah album eksperimental yang menampilkan beragam gaya musik dari Daniel Caesar.",
      songs: [
        {
          title: 'Entropy',
          duration: 199, // Durasi dalam detik
          genre: 'R&B',
        },
        {
          title: 'Love Again',
          duration: 208,
          genre: 'R&B',
        },
        {
          title: 'Frontal Lobe Muzik',
          duration: 186,
          genre: 'R&B',
        },
        {
          title: 'Open Up',
          duration: 214,
          genre: 'R&B',
        },
        {
          title: 'Restoration',
          duration: 197,
          genre: 'R&B',
        },
        {
          title: 'Superposition (ft. John Mayer)',
          duration: 245,
          genre: 'R&B',
        },
        {
          title: 'Too Deep to Turn Back',
          duration: 221,
          genre: 'R&B',
        },
        {
          title: 'Complexities',
          duration: 212,
          genre: 'R&B',
        },
        {
          title: 'Are You Ok?',
          duration: 218,
          genre: 'R&B',
        },
        {
          title: 'Blessed',
          duration: 191,
          genre: 'R&B',
        }
      ]
    },
    {
      id: 3,
      img: "https://images.genius.com/e1e750d796bafaf7e13a41f681c78114.1000x1000x1.jpg",
      artist: "Daniel Caesar",
      album: "Pilgrim's Paradise",
      price: 90,
      about: "Pilgrim's Paradise adalah EP pertama Daniel Caesar yang menampilkan vokal yang memikat dan aransemen musik yang indah.",
      songs: [
        {
          title: 'Paradise (ft. BADBADNOTGOOD & Sean Leon)',
          duration: 240, // Durasi dalam detik
          genre: 'R&B',
        },
        {
          title: 'Streetcar',
          duration: 180,
          genre: 'R&B',
        },
        {
          title: 'Death & Taxes',
          duration: 200,
          genre: 'R&B',
        },
        {
          title: 'Bad Habit',
          duration: 210,
          genre: 'R&B',
        },
        {
          title: 'Japanese Denim',
          duration: 198,
          genre: 'R&B',
        },
        {
          title: 'We will Always Have Paris',
          duration: 213,
          genre: 'R&B',
        },
        {
          title: 'End of the Road (Outro)',
          duration: 187,
          genre: 'R&B',
        },
        {
          title: 'Freudian',
          duration: 202,
          genre: 'R&B',
        },
        {
          title: 'West',
          duration: 220,
          genre: 'R&B',
        },
        {
          title: 'Silent Night',
          duration: 195,
          genre: 'R&B',
        }
      ]
    }
  ];
  
  private albumDataSubject = new BehaviorSubject<any[]>(this.albumData)
  albumData$ = this.albumDataSubject.asObservable()
  constructor(

  ) { }

  getAlbumData(){
    return this.albumData$
  }

  buyAlbum(id: number){
    const bonsaiIndex = this.albumData.findIndex((album) => album.id === id);
    if (bonsaiIndex !== -1) {
      this.albumData.splice(bonsaiIndex, 1); 
      this.albumDataSubject.next([...this.albumData]); 
    }
  }

  getDataById(id: number) {
    return this.albumDataSubject.pipe(
      map((data)=> data.find((datas)=> datas.id === id))
    )
  }
}
