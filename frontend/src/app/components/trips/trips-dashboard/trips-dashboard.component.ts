import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { CommonModule } from '@angular/common';
import { TripFormComponent } from '../trip-form/trip-form.component';

@Component({
  selector: 'app-trips-dashboard',
  standalone: true,
  templateUrl: './trips-dashboard.component.html',
  styleUrls: ['./trips-dashboard.component.scss'],
  imports: [CommonModule, TripFormComponent],
  providers: [TripService]
})
export class TripsDashboardComponent implements OnInit {
  trips: any[] = [];
  isFormVisible = false;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe((data: any[]) => {
      this.trips = data;
    });
  }

  scrollToDashboard() {
    const element = document.getElementById('dashboard');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  addTrip(newTrip: any) {
    this.tripService.createTrip(newTrip).subscribe({
      next: (trip) => {
        // this.trips.unshift(trip);
        this.isFormVisible = false;
        console.log('New trip has added: ', trip);
      },
      error: (error) => {
        console.error('Error creating trip:', error);
      }
    });
  }

  removeTrip(id: number) {
    console.log('Removing trip with id:', id);
    this.tripService.deleteTrip(id).subscribe(() => {
      this.trips = this.trips.filter(trip => trip.id !== id);
      console.log('Updated trips:', this.trips);
    });
  }
}