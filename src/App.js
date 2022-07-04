import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://mandarin.api.weniv.co.kr";

function App() {
  const [data, setData] = useState("초기화 값");

  // 데이터를 불러오는 통신 함수.
  function getData() {
    // 통신 후 데이터 저장.
    axios.get(url + "/user").then((res) => setData(res));
  }

  useEffect(getData, []);

  function postData() {
    let form = JSON.stringify({
      user: {
        username: "asdf",
        email: "abcd@naver.com",
        password: "abcdef",
        accountname: "abcd",
        intro: "abcd",
        image: "https://mandarin.api.weniv.co.kr/1641906557953.png",
      },
    });

    axios
      .post(url + "/user", form, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => console.log("회원가입 데이터", res));
  }

  return (
    <div className="App">
      <div onClick={() => postData()} style={{ backgroundColor: "red" }}>
        회원가입 테스트
      </div>
      <p>헬로 나는 김희진 김희진의 오늘 기분상태 : 좋음.</p>
    </div>
  );
}

export default App;
