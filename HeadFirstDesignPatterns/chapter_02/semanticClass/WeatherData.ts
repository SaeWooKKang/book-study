import { PushObserver, PullObserver } from "../interface/Observer";
import { PullSubject, PushSubject } from "../interface/Subject";

export class PushWeatherData implements PushSubject {
  private observers = new Set<PushObserver>();
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  public registerObserver(o: PushObserver) {
    this.observers.add(o);
  }

  public removeObserver(o: PushObserver) {
    this.observers.delete(o);
  }

  public notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged() { // 한 단계를 왜 추가 했을까..?
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  // etc WeatherData method...
}

export class PullWeatherData implements PullSubject {
  private observers = new Set<PullObserver>();
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  public registerObserver(o: PullObserver) {
    this.observers.add(o);
  }

  public removeObserver(o: PullObserver) {
    this.observers.delete(o);
  }

  public notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature() {
    return this.temperature;
  }

  public getHumidity() {
    return this.humidity;
  }

  public getPressure() {
    return this.pressure;
  }
  // etc WeatherData method...
}
