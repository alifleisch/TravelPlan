import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trips-form',
  standalone: true,
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TripFormComponent {
  @Output() tripCreated = new EventEmitter<any>();

  newTrip = {
    name: '',
    location: '',
    date: ''
  };

  submitForm() {
    if (this.newTrip.name && this.newTrip.location && this.newTrip.date) {
      this.tripCreated.emit(this.newTrip);
      this.newTrip = { name: '', location: '', date: '' };
    }
  }
}