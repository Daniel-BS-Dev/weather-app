import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModel } from '../../../model/weather';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers: [WeatherService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  initialCityName = 'São Paulo';
  weatherData!: WeatherModel;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string) {
    this.service.getWeatherDatas(cityName)
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response);
        },
        error: (error) => console.log(error)
      });

  }

}
