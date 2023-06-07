# Adapter Pattern, Facade Pattern

## Adapter Pattern
> 특정 클래스 인터페이스를 클라이언트에서 요구하는 다른 인터페이스로 변환. 

- 👉 인터페이스가 호환되지 않아 같이 쓸 수 없었던 클래스를 사용할 수 있게 도와줌

## Facade Pattern
> 서브시스템에 있는 일련의 인터페이스를 통합 인터페이스로 묶어줍니다. 또한 고수준 인터페이스로 정의하므로 서브시스템에을 더 편리하게 사용할 수 있습니다.

- 👉 복잡한 시스템을 편리하게 사용하기 위해 사용

## 모두 구성을 사용하지만, 용도가 다르다.
- `데코레이터 패턴`은 인터페이스는 바꾸지 않고 책임(기능)만 추가
- `어댑터 패턴`은 하나의 A 인터페이스를 B 인터페이스로 변환
- `퍼사드 패턴`은 복잡한 시스템을 간단한 인터페이스로 변경
