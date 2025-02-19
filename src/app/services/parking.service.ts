import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getParkingSlots(): Observable<any> {
    return this.http.get(`${this.apiUrl}/parking-slots`);
  }

  parkVehicle(vehicle: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/park-vehicle`, vehicle);
  }
}