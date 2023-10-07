import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data = new BehaviorSubject<any[]>([])
  data$ = this.data.asObservable()

  constructor(
    private httpClient: HttpClient
  ) {
    this.getData().subscribe((data)=>this.data.next(data))
    console.log("data wei", this.data)
   }

  getData(): Observable<any>{
    return this.httpClient.get("../../assets/mentor.json")
  }

  filterNameData(searchTerm: string): Observable<any[]> {
    return this.data.pipe(
      map((datas) => {

        const searchTermNormalized = searchTerm
          .toLowerCase()
          .normalize("NFD")
          .replaceAll(/[\u0300-\u036f]/g, "")
          .replaceAll(" ", "");
  
      
        return datas.filter((data) => {
          // Menggabungkan 'civility', 'first_name', dan 'last_name' menjadi satu string
          const fullName = `${data.civility} ${data.first_name} ${data.last_name} `;
          
         
          const fullNameNormalized = fullName
            .toLowerCase()
            .normalize("NFD")
            .replaceAll(/[\u0300-\u036f]/g, "")
            .replaceAll(" ", "");

          return fullNameNormalized.includes(searchTermNormalized);
        });
      })
    );
  }
  
  

  filterData(searchTerm: string, searchProperty: string): Observable<any[]> {
    return this.data.pipe(
      map((datas) => {
        // Menghilangkan karakter aksen dan mengonversi ke huruf kecil
        const searchTermNormalized = searchTerm
          .toLowerCase()
          .normalize("NFD")
          .replaceAll(" ", "")
          .replaceAll(/[\u0300-\u036f]/g, "")
          
  
        // Melakukan filter pada data berdasarkan searchTermNormalized dan searchProperty
        return datas.filter((data) => {
          // Menghilangkan karakter aksen dan mengonversi ke huruf kecil untuk properti yang ingin dicari
          const propertyValue = data[searchProperty];
          const propertyValueNormalized = propertyValue
            ? propertyValue.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "").replaceAll(" ", "")
            : "";
  
          // Memeriksa apakah nilai properti cocok dengan searchTermNormalized
          return propertyValueNormalized.includes(searchTermNormalized);
        });
      })
    );
  }

  filterUserTypeData(searchTerm: string): Observable<any[]> {
    return this.data.pipe(
      map((datas) => {
        // Menghilangkan karakter aksen dan mengonversi ke huruf kecil
        const searchTermNormalized = searchTerm
          .toLowerCase()
          .normalize("NFD")
          .replaceAll(/[\u0300-\u036f]/g, "")
          .replaceAll(" ", "");
  
        // Melakukan filter pada data berdasarkan searchTermNormalized
        return datas.filter((data) => {
          // Mengambil properti 'user_type' dalam objek 'company'
          const userType = data.company?.user_type;
  
          // Menghilangkan karakter aksen dan mengonversi ke huruf kecil untuk 'user_type'
          const userTypeNormalized = userType
            ? userType.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "").replaceAll(" ", "")
            : "";
  
          // Memeriksa apakah 'user_type' cocok dengan searchTermNormalized
          return userTypeNormalized.includes(searchTermNormalized);
        });
      })
    );
  }
  
  
}
