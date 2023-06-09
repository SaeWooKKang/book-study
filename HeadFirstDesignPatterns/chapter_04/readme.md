# Factory Pattern
### factory
- 객체 생성을 처리하는 클래스

### factory pattern
- 객체 생성을 캡슐화 한다.

### simple factory
- 팩토리가 PizzaStore 안에 포함됨
- 인스턴스 생성만 분리

### factory method pattern
팩토리 메소드 패턴에서는 객체를 생성할 때 필요한 인터페이스를 만듭니다. 어떤 클래스의 인스턴스를 만들지는 서브클래스에서 결정합니다. 팩토리 메소드 패턴을 사용하면 클래스 인스턴스 만드는 일을 서브클래스에게 맡기게 됩니다.

- 서브클래스에서 어떤 클래스를 만들지 결정함으로서 객체 생성을 캡슐화 한다.

### abstract factory pattern
구상 클래스에 의존하지 않고도 서로 연관되거나 의존적인 객체로 이루어진 제품군을 생산하는 인터페이스를 제공합니다. 구상 클래스는 서브클래스에서 만듭니다.

### 디자인 원칙
#### Dependency Inversion Principle(의존성 역전)
- 추상화된 것에 의존하게 만들고, 구상 클래스에 의존하지 않게 만든다.
- `factory pattern`으로 의존성 역전 원칙을 준수 할 수 있다.

### 저수준, 고수준 구성요소
- '고수준' 구성 요소는 다른 '저수준' 구성요소에 의해 정의되는 행동이 들어있는 구성 요소를 뜻한다. 

### 다형성
- interface에 맞춰 코딩하면 변화에 대응할 수 있다.