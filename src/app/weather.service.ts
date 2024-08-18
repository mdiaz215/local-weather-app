import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string){
    this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=Redmond&appid=1a905dd32b8d1aa167ede63791e13c80")
  }
}
