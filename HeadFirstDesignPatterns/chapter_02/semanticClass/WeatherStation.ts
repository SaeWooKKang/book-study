import { PushWeatherData, PullWeatherData } from "./WeatherData";
import { PushCurrentConditionDisplay, PullCurrentConditionDisplay } from './CurrentConditionDisplay';

export class PushWeatherStation {
  constructor(
    public weatherData = new PushWeatherData()
  ) {
    const currentDisplay = new PushCurrentConditionDisplay(this.weatherData);

    weatherData.setMeasurements(20, 10, 30);
  }
}

export class PullWeatherStation {
  constructor(
    public weatherData = new PullWeatherData()
  ) {
    const currentDisplay = new PullCurrentConditionDisplay(this.weatherData);

    weatherData.setMeasurements(20, 10, 30);
  }
}