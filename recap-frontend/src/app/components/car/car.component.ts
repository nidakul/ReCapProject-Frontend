import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  apiUrl = "https://localhost:7044/api/cars/getall";
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
