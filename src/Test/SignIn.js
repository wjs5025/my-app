import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { LabelStyle, InputStyle } from "../inputStyle";

function SignIn() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const url = "https://mandarin.api.weniv.co.kr";
  const [message, setMessage] = useState("");

  function check() {
    let user = {
      user: {
        email: userEmail,
        password: userPassword,
      },
    };

    axios
      .post(url + "/user/login", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          setMessage(res.data.message);
        }
        setUserData(res);
      });
  }
  return (
    <>
      <LabelStyle>
        이메일
        <InputStyle
          placeholder="이메일 주소를 입력해주세요."
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{message}</p>
      </LabelStyle>

      <LabelStyle>
        비밀번호
        <InputStyle
          placeholder="비밀번호를 설정해주세요."
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p onClick={check}>로그인</p>
      </LabelStyle>
    </>
  );
}

export default SignIn;

////
const StyledP = styled.p``;
