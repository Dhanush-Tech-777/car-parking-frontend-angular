import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {
  parkingSlots: any[] = [];

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingService.getParkingSlots().subscribe(data => {
      this.parkingSlots = data;
    });
  }
}