import { DisplayElement } from "../interface/DisplayElement";
import { Observer } from "../interface/Observer";
import { WeatherData } from "./WeatherData";

export class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature;
  private humidity;
  public weatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this.weatherData);
  }

  public update(temperature: number, humidity: number, pressure: number) { // 타입 자동완성 무엇..
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display() {
    console.log(
      `현재 상태: 온도 ${this.temperature} F, 습도 ${this.humidity}%`
    );
  }
}