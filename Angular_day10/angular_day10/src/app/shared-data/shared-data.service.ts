import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, map } from 'rxjs';
import { BonsaiType } from './bonsai.type';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  bonsaiData: any = [
    {
      id: 1,
      img: 'https://agrozine.id/wp-content/uploads/2021/11/MAPLE-BONSAI.jpg',
      name: 'Bonsai Máple Jepang',
      nickname: 'Maple Merah',
      species: 'Acer palmatum',
      from: 'Jepang',
      stock: 10,
      price: 500000,
      document: [
        {
          documentType: 'Sertifikat Asli',
          personName: 'John Doe',
          address: 'Jl. Pohon Beringin No. 123, Jakarta',
          personId: '1234567890',
          email: 'Lakilaki@mail.com'
        }
      ],
      includeItem: [
        {
          itemName: 'Pot Bonsai',
          material: 'Keramik',
          packaging: 'Dalam kotak khusus',
          useFor: 'Penanaman bonsai',
          itemPrice: '75000'
        },
        {
          itemName: 'Pot Bonsai',
          material: 'Keramik',
          packaging: 'Dalam kotak khusus',
          useFor: 'Penanaman bonsai',
          itemPrice: '75000'
        },
        {
          itemName: 'Alat Pemangkas Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kotak kayu',
          useFor: 'Merapikan bonsai',
          itemPrice: '125000'
        },
      ]
    },
    {
      id: 2,
      img: 'https://www.bonsaiempire.com/images/carrousel/Juniper05-chinese-juniper.jpg',
      name: 'Bonsai Juniper Sargentii',
      nickname: 'Juniper Sargentii Kecil',
      species: 'Juniperus chinensis sargentii',
      from: 'Amerika Utara',
      stock: 5,
      price: 350000,
      document: [
        {
          documentType: 'Sertifikat Asli',
          personName: 'Jane Smith',
          address: 'Jl. Bonsai Indah No. 45, Surabaya',
          personId: '9876543210',
          email: 'Perempuan@mail.com'
        }
      ],
      includeItem: [
        {
          itemName: 'Media Tanam Bonsai',
          material: 'Campuran pasir dan tanah liat',
          packaging: 'Dalam kantong plastik',
          useFor: 'Penanaman bonsai',
          itemPrice: '25000'
        },
        {
          itemName: 'Pot Bonsai',
          material: 'Keramik',
          packaging: 'Dalam kotak khusus',
          useFor: 'Penanaman bonsai',
          itemPrice: '75000'
        },
        {
          itemName: 'Alat Pemangkas Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kotak kayu',
          useFor: 'Merapikan bonsai',
          itemPrice: '125000'
        },
      ]
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/81viyqnx0YL._AC_UF1000,1000_QL80_.jpg',
      name: 'Bonsai Elm S-Curve',
      nickname: 'Elm S-Curve',
      species: 'Ulmus parvifolia',
      from: 'Cina',
      stock: 8,
      price: 600000,
      document: [
        {
          documentType: 'Sertifikat Asli',
          personName: 'Michael Johnson',
          address: 'Jl. Bonsai Raya No. 567, Bandung',
          personId: '5432109876',
          email: 'Lakilaki@mail.com'
        }
      ],
      includeItem: [
        {
          itemName: 'Alat Pemangkas Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kotak kayu',
          useFor: 'Merapikan bonsai',
          itemPrice: '125000'
        },
        {
          itemName: 'Pot Bonsai',
          material: 'Keramik',
          packaging: 'Dalam kotak khusus',
          useFor: 'Penanaman bonsai',
          itemPrice: '75000'
        },
        {
          itemName: 'Alat Pemangkas Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kotak kayu',
          useFor: 'Merapikan bonsai',
          itemPrice: '125000'
        },
      ]
    },
    {
      id: 4,
      img: 'https://lzd-img-global.slatic.net/g/p/f1f285c96b9623d4fad7da9757d9b6cb.jpg_720x720q80.jpg',
      name: 'Bonsai Sakura',
      nickname: 'Sakura Mini',
      species: 'Prunus serrulata',
      from: 'Jepang',
      stock: 3,
      price: 750000,
      document: [
        {
          documentType: 'Sertifikat Asli',
          personName: 'Amanda Lee',
          address: 'Jl. Bonsai Sejahtera No. 789, Bali',
          personId: '1357924680',
          email: 'Perempuan@mail.com'
        }
      ],
      includeItem: [
        {
          itemName: 'Pupuk Bonsai',
          material: 'Organik',
          packaging: 'Dalam botol plastik',
          useFor: 'Pemupukan bonsai',
          itemPrice: '35000'
        },
        {
          itemName: 'Pot Bonsai',
          material: 'Keramik',
          packaging: 'Dalam kotak khusus',
          useFor: 'Penanaman bonsai',
          itemPrice: '75000'
        },
        {
          itemName: 'Alat Pemangkas Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kotak kayu',
          useFor: 'Merapikan bonsai',
          itemPrice: '125000'
        },
      ]
    },
    {
      id: 5,
      img: 'https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2023/01/ficus-microcarpa.jpg',
      name: 'Bonsai Ficus Ginseng',
      nickname: 'Ficus Ginseng Besar',
      species: 'Ficus retusa',
      from: 'Asia Tenggara',
      stock: 6,
      price: 450000,
      document: [
        {
          documentType: 'Sertifikat Asli',
          personName: 'David Wilson',
          address: 'Jl. Bonsai Bahagia No. 101, Medan',
          personId: '2468013579',
          email: 'Lakilaki@mail.com'
        }
      ],
      includeItem: [
        {
          itemName: 'Gunting Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kantong plastik',
          useFor: 'Pemangkasan bonsai',
          itemPrice: '60000'
        },
        {
          itemName: 'Pot Bonsai',
          material: 'Keramik',
          packaging: 'Dalam kotak khusus',
          useFor: 'Penanaman bonsai',
          itemPrice: '75000'
        },
        {
          itemName: 'Alat Pemangkas Bonsai',
          material: 'Baja tahan karat',
          packaging: 'Dalam kotak kayu',
          useFor: 'Merapikan bonsai',
          itemPrice: '125000'
        },
      ]
    }
  ];
  

  private bonsaiDataSubject = new BehaviorSubject<BonsaiType[]>(this.bonsaiData)
  private selectedBonsaiSubject = new BehaviorSubject<BonsaiType>(null)
  bonsaiData$ = this.bonsaiDataSubject.asObservable()

  getBonsaiData() : Observable<BonsaiType[]>{
    return this.bonsaiDataSubject.asObservable()
  }


  getBonsaiById(id: number): Observable<BonsaiType>{
    return this.bonsaiDataSubject.pipe(
      map((bonsais)=> bonsais.find((bonsai) => bonsai.id === id))
    )
  }

  addBonsai(bonsai : any) {
    this.bonsaiData.push(bonsai)
    this.bonsaiDataSubject.next([...this.bonsaiData])
  }

  editBonsaiByid(id : number, updateData: BonsaiType){
    const bonsaiIndex = this.bonsaiData.findIndex((bonsai)=> bonsai.id === id)
    if(bonsaiIndex !== -1){
      this.bonsaiData[bonsaiIndex] = {
        ...this.bonsaiData[bonsaiIndex],
        ...updateData
      }
      this.bonsaiDataSubject.next([...this.bonsaiData])
    }
  }

  deleteBonsaiById(id: number): void {
    const bonsaiIndex = this.bonsaiData.findIndex((bonsai) => bonsai.id === id);
    if (bonsaiIndex !== -1) {
      this.bonsaiData.splice(bonsaiIndex, 1); // Hapus elemen dari array
      this.bonsaiDataSubject.next([...this.bonsaiData]); // Perbarui subjek dengan data yang diperbarui
    }
  }



  filterBonsaiData(searchTerm: string): Observable<BonsaiType[]> {
    return this.bonsaiDataSubject.pipe(
      map((bonsais) => {
        // Menghilangkan karakter aksen dan mengonversi ke huruf kecil
        const searchTermNormalized = searchTerm
          .toLowerCase()
          .normalize("NFD")
          .replaceAll(/[\u0300-\u036f]/g, "")
          .replaceAll(" ", "");
  
        // Melakukan filter pada data berdasarkan searchTermNormalized
        return bonsais.filter((bonsai) => {
          // Menghilangkan karakter aksen dan mengonversi ke huruf kecil
          const bonsaiNameNormalized = bonsai.name
            .toLowerCase()
            .normalize("NFD")
            .replaceAll(/[\u0300-\u036f]/g, "")
            .replaceAll(" ", "");
  
            console.log(bonsaiNameNormalized, "test");
            
          // Memeriksa apakah nama bonsai mengandung searchTermNormalized
          return bonsaiNameNormalized.includes(searchTermNormalized);
        });
      })
    );
  }
  

}
