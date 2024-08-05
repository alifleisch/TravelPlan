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
    this.trips.push(newTrip); // добавляем новую поездку в локальный массив
    this.isFormVisible = false;
    // TODO: Здесь нужно сделать запрос на сервер для добавления поездки
  }
}