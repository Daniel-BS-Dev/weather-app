import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../../../model/weather';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, NgIf],
  providers: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input() weatherDatas!: WeatherModel;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  constructor() { }

  get temperature() {
   return this.weatherDatas.main.temp.toFixed();
  }

  ngOnInit(): void {
     console.log(this.weatherDatas)
  }
}
