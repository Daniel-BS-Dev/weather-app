import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModel } from '../../../model/weather';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../camponents/card/card.component';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    CardComponent,
    NgIf,
  ],
  providers: [WeatherService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  initialCityName = 'Campinas';
  weatherData!: WeatherModel;
  searchIcon = faMagnifyingGlass;

  constructor(
    private service: WeatherService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getWeatherDatas();
  }

  onSubmit() {
    this.getWeatherDatas();
  }

  private getWeatherDatas() {
    this.service.getWeatherDatas(this.initialCityName)
    .subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        this.initialCityName = '';
        },
        error: () => this.toastr.info('Verifique o nome digitado, e tente novamente.', 'Nome inválido')
      });

  }

}
