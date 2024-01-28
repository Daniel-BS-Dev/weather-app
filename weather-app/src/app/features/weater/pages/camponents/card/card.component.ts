import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

import { CardItemComponent } from '../card-item/card-item.component';
import { WeatherModel } from '../../../../model/weather';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf,
    CardItemComponent
  ],
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
   return `${this.weatherDatas.main.temp.toFixed()} °C`;
  }

  get minTemperature() {
    return `${this.weatherDatas.main.temp_min.toFixed()} °C`;
   }

   get maxTemperature() {
    return `${this.weatherDatas.main.temp_max.toFixed()} °C`;
   }

  ngOnInit(): void {
     console.log(this.weatherDatas)
  }
}
