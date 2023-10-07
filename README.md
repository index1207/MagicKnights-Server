# 매직나이츠 게임서버
타입스크립트와 웹소켓을 사용한 멀티 플레이 게임 서버입니다. <br>
[게임 클라이언트](https://github.com/index1207/MagicKnights-Client)

## 목표
- 게임서버 컨텐츠 로직 실습하기
- 유저가 방을 만들고, 방안의 2D 캐릭터의 움직임과 데이터 동기화
- 웹의 여러 기술들 활용

## 커스텀 패킷 구조
패킷을 `[패킷아이디:2바이트][직렬화데이터:N바이트]`형태로 보내서 서버측과 클라이언트측에서 서로 통신을 할 수 있다.
플레이어의 정보는 [Google Protocol Buffer](https://github.com/protocolbuffers/protobuf)를 통해 직렬화 시킨 후, Node.JS의 Buffer에
헤더와 데이터를 실어서 보낸다.
