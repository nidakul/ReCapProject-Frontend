import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7044/api/";
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandId(brandId : number) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)

  }

  add(car:CarDetail) : Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add", car);
  }
}
