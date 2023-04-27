import { WeatherData } from "./WeatherData";
import { CurrentConditionDisplay } from './CurrentConditionDisplay';

export class WeatherStation {
  constructor(
    public weatherData = new WeatherData()
  ) {
    const currentDisplay = new CurrentConditionDisplay(this.weatherData);


    weatherData.setMeasurements(20, 10, 30);
  }
}
