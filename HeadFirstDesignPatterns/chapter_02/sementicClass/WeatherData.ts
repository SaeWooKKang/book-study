import { Observer } from "../interface/Observer";
import { Subject } from "../interface/Subject";

export class WeatherData implements Subject {
  private observers = new Set<Observer>();
  private temperature;
  private humidity;
  private pressure;

  public registerObserver(o: Observer) {
    this.observers.add(o);
  }

  public removeObserver(o: Observer) {
    this.observers.delete(o);
  }

  public notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  // etc WeatherData method...
}