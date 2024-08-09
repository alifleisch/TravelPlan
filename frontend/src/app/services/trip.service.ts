import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiUrl = 'http://localhost:3000/trips'
  constructor(private http: HttpClient) { }

  private dummyTrips = [
    { id: 1, name: 'Major Marathon', location: 'Berlin', date: '2024-08-20' },
    { id: 2, name: 'SOAD concert', location: 'London', date: '2024-10-15' },
    { id: 3, name: 'Superhalfs HM', location: 'Lisbon', date: '2025-04-20' }
  ];

  getTrips(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl);
    return of(this.dummyTrips);
  }

  createTrip(trip: any): Observable<any> {
    // return this.http.post<any>(this.apiUrl, trip);
    const newId = this.dummyTrips.length > 0 ? Math.max(...this.dummyTrips.map(t => t.id)) + 1 : 1;
    const newTrip = { id: newId, ...trip };
    this.dummyTrips.unshift(newTrip);
    return of(newTrip);
  }

  deleteTrip(id: number): Observable<void> {
    this.dummyTrips = this.dummyTrips.filter(trip => trip.id !== id);
    return of();
  }
}