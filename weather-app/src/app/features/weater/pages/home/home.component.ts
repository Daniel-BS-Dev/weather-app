import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModel } from '../../../model/weather';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, FontAwesomeModule, ReactiveFormsModule],
  providers: [WeatherService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  initialCityName = new FormControl('');
  weatherData!: WeatherModel;
  searchIcon = faMagnifyingGlass;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName.value || '');
  }

  onSubmit() {
    this.getWeatherDatas(this.initialCityName.value || '');
    this.initialCityName.patchValue('');
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
