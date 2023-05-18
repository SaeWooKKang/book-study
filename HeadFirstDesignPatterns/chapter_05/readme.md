# Singleton Pattern

### 정의

> 클래스 인스턴스를 하나만 만들고, 그 인스턴스로의 전역 접근을 제공합니다.

- 자바는 **멀티스레드**를 지원해서 멀티스레딩 문제를 해결해야 하지만, 자바스크립트는 **싱글스레드** 기반으로 멀티스레딩 문제가 없다고 생각한다.

- static method를 사용할 것인지 아니면 instance를 초기화 할 것인지는 팀의 컨벤션으로 결정하면 될 것 같다. 개인적으로는 instance를 초기화 하는 방식이 깔끔한 것 같다.

#### static method를 사용하는 방식

```ts 
class Singleton {
  private static uniqueInstance: Singleton1;

  private constructor() { }

  public static getInstance() {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton1();

      return this.uniqueInstance;
    }

    return this.uniqueInstance;
  }
}

new Singleton() // error

Singleton.getInstance() === Singleton.getInstance(); // true
```

#### instance를 초기화 하는 방식

``` ts 
class Singleton {
  private static uniqueInstance = new Singleton();

  constructor() {
    return Singleton.uniqueInstance;
  }
}

new Singleton2() === new Singleton2(); // true
```