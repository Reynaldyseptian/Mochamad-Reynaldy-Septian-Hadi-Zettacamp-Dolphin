import { Injectable } from '@angular/core';
import {AnimalType} from './animal.type'
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminSharedService {

  constructor() { }

  private animalData = [
    {
      id: 1,
      animalName: "Jerapah",
      nickName: "Mas Jerapah",
      umur: 4,
      habitat: "padang rumput",
      asalNegara: "Afrika",
      isMamalia: true,
      img: "https://asset.kompas.com/crops/M8tZZVU1-lgHxIPm1ZIF3m3pN7s=/0x0:1000x667/1200x800/data/photo/2017/09/16/2548005054.JPG",

    },
    {
      id: 2,
      animalName: "Singa",
      nickName: "Raja Hutan",
      umur: 6,
      habitat: "Hutan",
      asalNegara: "Afrika",
      isMamalia: true,
      img: "https://cdn0-production-images-kly.akamaized.net/4Q5avSbeX0JfHF2V9JDzLI9Q660=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3299102/original/053547300_1605642593-lion-794962_640.jpg"
    },
    {
      id: 3,
      animalName: "Gajah",
      nickName: "Besar Gajah",
      umur: 10,
      habitat: "Hutan dan Savana",
      asalNegara: "Asia dan Afrika",
      isMamalia: true,
      img: "https://gdb.voanews.com/5168E10B-1DE9-46B2-BD06-E5724ACD68ED_cx0_cy7_cw0_w1080_h608_s.jpg"
    },
    {
      id: 4,
      animalName: "Kanguru",
      nickName: "Skippy",
      umur: 3,
      habitat: "Hutan dan Padang Rumput",
      asalNegara: "Australia",
      isMamalia: true,
      img: "https://asset.kompas.com/crops/kx8WMDhQS8wiKodf0fV8-vrJRXU=/0x0:1000x667/750x500/data/photo/2020/02/12/5e43ee472fd72.jpg"
    },
    {
      id: 5,
      animalName: "Kura-Kura",
      nickName: "Torty",
      umur: 25,
      habitat: "Darat dan Air",
      asalNegara: "Berbagai belahan dunia",
      isMamalia: false,
      img: "https://asset.kompas.com/crops/tkMmIaj1OiYlxUgX-KbD1CVzyHc=/0x0:4709x3139/1200x800/data/photo/2021/05/07/60956ee89fed2.jpg"
    },
    {
      id: 6,
      animalName: "Kucing",
      nickName: "Whiskers",
      umur: 2,
      habitat: "Rumah",
      asalNegara: "Berbagai belahan dunia",
      isMamalia: true,
      img: "https://asset.kompas.com/crops/SboPqoFuP-CSjlg16_-lys4IhB8=/67x67:867x600/780x390/data/photo/2020/11/25/5fbdc71d1fec0.jpg"
    },
    {
      id: 7,
      animalName: "Ular",
      nickName: "Slither",
      umur: 8,
      habitat: "Hutan dan Lahan Terbuka",
      asalNegara: "Berbagai belahan dunia",
      isMamalia: false,
      img: "https://cdn1-production-images-kly.akamaized.net/ddEft7Vj_CekBpNneIVQDZfw1Cg=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4388828/original/052024300_1681100901-Thumbnail_Liputan6.com-7.jpg"
    },
    {
      id: 8,
      animalName: "Pinguin",
      nickName: "Happy Feet",
      umur: 7,
      habitat: "Lautan",
      asalNegara: "Antarktika",
      isMamalia: false,
      img: "https://thumb.viva.co.id/media/frontend/thumbs3/2022/06/14/62a812366eb80-penguin-gentoo_1265_711.jpeg"
    },
    {
      id: 9,
      animalName: "Gorila",
      nickName: "Kong",
      umur: 12,
      habitat: "Hutan Hujan",
      asalNegara: "Afrika",
      isMamalia: true,
      img: "data:image/jpeg;base64,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"
    },
    // {
    //   id: 10,
    //   animalName: "Kuda",
    //   nickName: "Bucephalus",
    //   umur: 5,
    //   habitat: "Padang Rumput",
    //   asalNegara: "Berbagai belahan dunia",
    //   isMamalia: true,
    //   img: "https://i0.wp.com/starfarm.co.id/wp-content/uploads/2021/06/kuda-putih.jpeg?fit=728%2C455&ssl=1"
    // }
  ];

  private animalDataSubject = new BehaviorSubject<AnimalType[]>(this.animalData);
  private selectedAnimalSubject = new BehaviorSubject<AnimalType>(null)

  selectedAnimal$ = this.selectedAnimalSubject.asObservable()
  animalData$ = this.selectedAnimalSubject.asObservable()

  updateSelectedAnimal(selectedAnimal: AnimalType){
    this.selectedAnimalSubject.next(selectedAnimal)
  }

  getAnimalData(): Observable<AnimalType[]> {
    return this.animalDataSubject.asObservable();
  }

  addAnimal(animal: AnimalType) {
    this.animalData.push(animal);
    this.animalDataSubject.next([...this.animalData]);
  }
  
  updateAnimalData(updatedData: AnimalType[]) {
    this.animalData = updatedData;
    this.animalDataSubject.next([...this.animalData]);
  }

  // getAnimalById(id: number): Observable<AnimalType> {
  //   return this.animalDataSubject.pipe(
  //     map((animals) => animals.find((animal) => animal.id === id))
  //   );
  // }

  getAnimalById(id: number): Observable<AnimalType> {
    return this.animalDataSubject.pipe(
      map((animals) => animals.find((animal) => animal.id === id))
    );
  }
}
