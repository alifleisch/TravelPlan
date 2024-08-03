import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trips-dashboard',
  standalone: true,
  templateUrl: './trips-dashboard.component.html',
  styleUrls: ['./trips-dashboard.component.scss'],
  imports: [CommonModule],
  providers: [TripService]
})
export class TripsDashboardComponent implements OnInit {
  trips: any[] = [];

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
}