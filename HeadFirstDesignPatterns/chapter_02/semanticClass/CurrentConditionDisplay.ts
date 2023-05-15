import { DisplayElement } from "../interface/DisplayElement";
import { PushObserver, PullObserver } from "../interface/Observer";
import { PullWeatherData, PushWeatherData } from "./WeatherData";

export class PushCurrentConditionDisplay implements PushObserver, DisplayElement {
  private temperature!: number;
  private humidity!: number;
  private weatherData!: PushWeatherData;

  constructor(weatherData: PushWeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
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

export class PullCurrentConditionDisplay implements PullObserver, DisplayElement {
  private temperature!: number;
  private humidity!: number;
  private weatherData!: PullWeatherData;

  constructor(weatherData: PullWeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  public display() {
    console.log(
      `현재 상태: 온도 ${this.temperature} F, 습도 ${this.humidity}%`
    );
  }
}

