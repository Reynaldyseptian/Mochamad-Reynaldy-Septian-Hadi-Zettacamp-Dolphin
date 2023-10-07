import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  dummyUser: any = [];
  private dummyUserDataSubject = new BehaviorSubject<any[]>(this.dummyUser);
  dummyUserData$ = this.dummyUserDataSubject.asObservable();


  constructor(private httpClient: HttpClient) {
    this.getUsers().subscribe((users) => {
      this.dummyUser = users; 
      this.dummyUserDataSubject.next(this.dummyUser); 
    });
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  deleteUser(id: number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.httpClient.delete(url).pipe(
      map(() => {
        // Setelah penghapusan HTTP berhasil, hapus item dari dummyData
        this.dummyUser = this.dummyUser.filter(user => user.id !== id);
        this.dummyUserDataSubject.next(this.dummyUser); // Memperbarui subject
      })
    );
  }
  

  getUserDataById(id: number): Observable<any> {
    // const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    // return this.httpClient.get(url);
    return this.dummyUserDataSubject.pipe(
      map((users)=> users.find((user) => user.id === id))
    )
  }



  addUser(newUser: any): Observable<any> {
    return this.httpClient.post<any>(
      'https://jsonplaceholder.typicode.com/users',
      newUser
    ).pipe(
      map((addedUser) => {
        this.dummyUser.push(addedUser);
        this.dummyUserDataSubject.next(this.dummyUser); 
        return addedUser;
      })
    );
  }
  

  editUser(updatedUser: any): Observable<any> {
      const url = `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`;
      return this.httpClient.put<any>(url, updatedUser).pipe(
        map(() => {
          // Jika pengguna berhasil diperbarui, perbarui data pengguna di dummyUser
          const existingUserIndex = this.dummyUser.findIndex(user => user.id === updatedUser.id);
          if (existingUserIndex !== -1) {
            this.dummyUser[existingUserIndex] = updatedUser;
            this.dummyUserDataSubject.next(this.dummyUser); // Memperbarui subject
          }
        })
      );
    }

  
  
}
