# blog

<< 이미지 클릭하면 원본 크기로 보입니다. >>

<p>메인</p>
<img src="https://user-images.githubusercontent.com/78482307/124697942-b4322780-df22-11eb-88df-8cb68565a614.png" alt="랜딩 페이지" width="400px">
<br></br>
<p>로그인, 회원가입</p>
<div style="display: flex">
  <img src="https://user-images.githubusercontent.com/78482307/124697929-ada3b000-df22-11eb-88d8-c08967ae5a19.png" alt="로그인" width="400px">
  <img src="https://user-images.githubusercontent.com/78482307/124697931-aed4dd00-df22-11eb-9cf5-e70d8f92dc1e.png" alt="회원가입" width="400px">
</div>
<br></br>
<p>글 보기, 글 작성</p>
<div style="display: flex">
  <img src="https://user-images.githubusercontent.com/78482307/124698409-bea0f100-df23-11eb-838a-88a44638687d.png" alt="포스트 페이지" width="400px">
  <img src="https://user-images.githubusercontent.com/78482307/124697941-b3999100-df22-11eb-94bb-5cfb856bb4f6.png" alt="글작성 페이지" width="400px">
</div>
  
<br></br>
<h2>구현된 기능</h2>
1. 로그인<br></br>
<img src="https://user-images.githubusercontent.com/78482307/124696022-3fa9b980-df1f-11eb-88c5-f296ae7ea0fb.gif" alt="로그인_gif">

<p>기능</p>
아이디 저장하기: localstorage 사용<br></br>

<br></br>
2. 회원가입<br></br>
<img src="https://user-images.githubusercontent.com/78482307/124700157-30c70500-df27-11eb-8ff9-9118a1fb156c.jpg" alt="회원가입"><br></br>
이벤트 이용 중복된 이메일 체크, 비밀번호 비교<br></br>
전체적인 유효성 검사는 미구현<br></br>

<br></br>
3. 게시판<br></br>
<img src="https://user-images.githubusercontent.com/78482307/124699532-edb86200-df25-11eb-87f6-61460f0de97c.jpg" alt="글" width="600px"><br></br>
게시판 페이징 구현<br></br>
<img src="https://user-images.githubusercontent.com/78482307/124699036-04aa8480-df25-11eb-80ca-4063784c515e.jpg" alt="글 작성" width="600px"><br></br>
▲ 글 작성 페이지 - react-quill 사용<br></br>
글 수정 페이지<br></br>
글 삭제 기능<br></br>
<img src="https://user-images.githubusercontent.com/78482307/124699266-6b2fa280-df25-11eb-90d1-7fe123a93d72.jpg" alt="댓글" width="600px"><br></br>
▲ 글 보기 페이지에서 댓글 구현<br></br>
댓글 페이징 미구현<br></br>
카테고리 미구현 - 관리자 페이지를 만들어야 함<br></br>



서버단 만들 때 사용했던 것들 <br></br>
nodejs - express 노드js 프레임워크 <br></br>
mongodb - mongoose Object Document Model <br></br>
라이브러리<br></br>
``` 
"dependencies": {
    "bcrypt": "^5.0.1",  // 비밀번호 암호화 
    "concurrently": "^6.2.0", // 한번의 명령어로 서버와 클라이언트를 작동
    "cookie-parser": "^1.4.5", // express에서 쿠키를 사용하기 위해서는 cookie-parser가 필요하다.
    "express": "^4.17.1", 
    "jsonwebtoken": "^8.5.1", //jwt 사용 이유: https://medium.com/sjk5766/jwt-json-web-token-%EC%86%8C%EA%B0%9C-49e211c65b45
    "mongoose": "^5.12.14",
    "mongoose-sequence": "^5.3.1", // auto-increase
    "multer": "^1.4.2" // 파일 업로드를 위해 사용하는 node.js 미들웨어
  },
  "devDependencies": {
    "nodemon": "^2.0.7" //코드를 수정해도 자동으로 서버를 재시작 시켜준다. 
  }
```
<br></br>
프론트 부분<br></br>
react<br></br>
```
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.35", //폰트어섬
    "@fortawesome/free-brands-svg-icons": "^5.15.3", 
    "@fortawesome/free-solid-svg-icons": "^5.15.3", 
    "@fortawesome/react-fontawesome": "^0.1.14", 
    "@looop/quill-image-resize-module-react": "^3.1.5", //리액트 퀄 에디터 이미지 크기 조절 기능
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1", //axios
    "http-proxy-middleware": "^0.19.1", //사용 이유: 클라이언트와 서버단 서로 다른 포트를 사용하고 있기 때문에 cors 문제가 발생한다. 그래서 프록시 서버를 사용
    "moment": "^2.29.1", 
    "query-string": "^4.3.4", //쿼리스트링을 객체로 만들어준다.
    "react": "^17.0.2", 
    "react-dom": "^17.0.2", 
    "react-loading": "^2.0.3", //로딩 애니메이션 제공
    "react-moment": "^1.1.1", //서버로부터 받은 날짜 정보 dateformat 
    "react-quill": "^1.3.5", //텍스트 에디터
    "react-redux": "^7.2.4", //상태 관리 라이브러리
    "react-router-dom": "^5.2.0", //페이지 이동 시 컴포넌트를 불러온다. 
    "react-scripts": "4.0.3", 
    "redux": "^4.1.0", 
    "redux-promise": "^0.6.0", // 프로미스 기반의 비동기 작업을 조금 더 편하게 해준다.
    "redux-thunk": "^2.3.0", // Redux Thunk는 액션 생성자가 리턴하는 것을 객체가 아닌 함수를 사용할 수 있게 한다.
    "web-vitals": "^1.1.2"
  },
```
<br></br>


