import { Component } from '@angular/core';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicle: any = {};

  constructor(private parkingService: ParkingService) {}

  onSubmit() {
    this.parkingService.parkVehicle(this.vehicle).subscribe(response => {
      console.log('Vehicle parked:', response);
    });
  }
}