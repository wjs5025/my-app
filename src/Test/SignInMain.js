import SignInProfile from "./SignInProfile";
import SignInEmail from "./SignInEmail";
import { useState } from "react";
import axios from "axios";
function SignInMain() {
  const [step, setStep] = useState(0);
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userIntro, setIntro] = useState("");
  const [user, setUser] = useState("");
  const url = "https://mandarin.api.weniv.co.kr";

  //통신데이터 함수
  function postData() {
    //보낼 데이터가 저장된 변수
    let userData = {
      user: {
        username: userName,
        email: userEmail,
        password: userPassword,
        accountname: userId,
        intro: userIntro,
        image: "https://mandarin.api.weniv.co.kr/1641906557953.png",
      },
    };

    //보낸당 저장된 변수를 담아서
    axios
      .post(url + "/user", userData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => setUser(res)); //보낸거 찍어본다
  }

  // 영이면 이거
  if (step === 0)
    return (
      <>
        <SignInEmail
          userEmail={userEmail}
          setEmail={setEmail}
          setStep={setStep}
          userPassword={userPassword}
          setPassword={setPassword}
        />
      </>
    );
  else
    return (
      <>
        <SignInProfile
          userName={userName}
          setName={setName}
          userId={userId}
          setId={setId}
          userIntro={userIntro}
          setIntro={setIntro}
          postData={postData}
        />
      </>
    );
}

export default SignInMain;
