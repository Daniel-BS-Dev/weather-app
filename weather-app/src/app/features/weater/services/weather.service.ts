import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '6382bcc26479515eedc5eecb7474992f';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    const url = 'https://api.openweathermap.org/data/2.5/weather';

    return this.http.get(
      `${url}?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`);
  }
}
