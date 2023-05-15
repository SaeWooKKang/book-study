import { PullObserver, PushObserver } from "./Observer";

export interface PushSubject {
  registerObserver: (o: PushObserver) => void;
  removeObserver: (o: PushObserver) => void;
  notifyObservers: () => void;
}

export interface PullSubject {
  registerObserver: (o: PullObserver) => void;
  removeObserver: (o: PullObserver) => void;
  notifyObservers: () => void;
}

