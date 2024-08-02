import { Routes } from '@angular/router';
import { TripsDashboardComponent } from './components/trips/trips-dashboard/trips-dashboard.component';
import { TripFormComponent } from './components/trips/trip-form/trip-form.component';
import { TripDetailComponent } from './components/trips/trip-detail/trip-detail.component';
import { RoutePlannerComponent } from './components/route-planner/route-planner.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { TransportComponent } from './components/transport/transport.component';
import { AccommodationsComponent } from './components/accommodations/accommodations.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { path: 'trips', component: TripsDashboardComponent },
    { path: 'trips/new', component: TripFormComponent },
    { path: 'trips/:id', component: TripDetailComponent },
    { path: 'plan', component: RoutePlannerComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'transport', component: TransportComponent },
    { path: 'accommodations', component: AccommodationsComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: '/trips', pathMatch: 'full' },
    { path: '**', redirectTo: '/trips' }
];