export interface PushObserver {
  update: (temperature: number, humidity: number, pressure: number) => void;
}

export interface PullObserver {
  update(): void;
}