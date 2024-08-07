import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-trips-form',
  standalone: true,
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss'],
  imports: [CommonModule, FormsModule,
    MatButtonModule, MatInputModule,
    MatFormFieldModule, FormsModule]
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
      this.resetForm();
    }
  }

  resetForm() {
    this.newTrip = {
      name: '',
      location: '',
      date: ''
    };
  }
}