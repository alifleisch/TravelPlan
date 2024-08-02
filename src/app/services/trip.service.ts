import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  // private apiUrl = ''
  // constructor(private http: HttpClient) { }

  getTrips(): Observable<any[]> {
    const dummyTrips = [
      { id: 1, name: 'Berlin Marathon', location: 'Berlin', date: '2024-08-20' },
      { id: 2, name: 'SOAD concert', location: 'London', date: '2024-10-15' }
    ];
    return of(dummyTrips);

    // return this.http.get<any[]>(this.apiUrl);
  }
}