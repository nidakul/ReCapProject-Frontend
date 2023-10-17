import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private carService : CarService, private activatedRoute : ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"]);
      }else{
        this.getCars();
      }
    })

    
  }

  getCars() {
    this.carService.getCars().subscribe(response =>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrandId(brandId : number){
    this.carService.getCarsByBrandId(brandId).subscribe(response =>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }
}
