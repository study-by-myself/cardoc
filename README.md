
## How to run

### git clone
```shell
git clone https://github.com/study-by-myself/cardoc.git
```

### start at 3000 port
```shell
yarn
yarn start
```

<br /><br />

## 구현 방법과 이유
- nestjs와 sqlite, typeorm을 이용하여 구현
- 빠르고 간편한 개발을 위해 nestjs를 사용.
- 유지 보수를 위해 typeorm을 사용.
- 가장 큰 이유는 nestjs와 typeorm을 한 번 쯤 써보고 싶었음.

<br /><br />

## 서버 구조 및 디자인패턴
### repository pattern
![image](https://user-images.githubusercontent.com/60090391/143772807-0f745e2e-ecb7-41b0-9e1d-bcad361e52fb.png)

- db model과 db model에 접근하기 위한 logic을 분리하기 위함
- nestjs에서 repository pattern을 적극 권장해서 한 번 써보고 싶었음
- 써보니까 관심사가 분리되어 active record pattern에 비해 좀 더 깔끔하다는 느낌을 받았음.

<br /><br />

## ERD
<img width="811" alt="스크린샷 2021-11-28 오후 11 28 36" src="https://user-images.githubusercontent.com/60090391/143772121-bcc68b34-a80a-4de9-8cdb-fdf052812147.png">

<br /><br />

## API Document

### POST `/users`
```ts
/* Request Body 예제 */
{ "id": "candycandy", "password": "ASdfdsf3232@" }
```

### POST `/tires`
```ts
/* Request Body 예제 */
{"data": [
  {
    "id": "candycandy",
    "trimId": 5000
  },
  {
    "id": "mylovewolkswagen",
    "trimId": 9000
  },
  {
    "id": "bmwwow",
    "trimId": 11000
  },
  {
    "id": "dreamcar",
    "trimId": 15000
  }
]}
```

### GET `/tires/<id:string>`




