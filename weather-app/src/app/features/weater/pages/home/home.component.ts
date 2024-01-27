import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModel } from '../../../model/weather';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../camponents/card/card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CardComponent,
    NgIf,
  ],
  providers: [WeatherService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  initialCityName = new FormControl('Campinas');
  weatherData!: WeatherModel;
  searchIcon = faMagnifyingGlass;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas();
  }

  onSubmit() {
    this.getWeatherDatas();
  }

  private getWeatherDatas() {
    this.service.getWeatherDatas(this.initialCityName.value || '')
    .subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        this.initialCityName.patchValue('');
        },
        error: (error) => console.log(error)
      });

  }

}
