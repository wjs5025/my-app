import { LabelStyle, InputStyle } from "../inputStyle";

function SignInProfile({
  userName,
  setName,
  userId,
  setId,
  userIntro,
  setIntro,
  postData,
}) {
  return (
    <>
      {" "}
      <LabelStyle>
        사용자 이름
        <InputStyle
          placeholder="7-10자 이내여야 합니다."
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
      </LabelStyle>
      <LabelStyle>
        계정 ID
        <InputStyle
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setId(e.target.value)}
        />
      </LabelStyle>
      <LabelStyle>
        소개
        <InputStyle
          placeholder="자신과 반려동물에 대해 소개해 주세요!"
          type="text"
          name="userIntro"
          value={userIntro}
          onChange={(e) => setIntro(e.target.value)}
        />
      </LabelStyle>
      <p onClick={postData}>시작</p>
    </>
  );
}

export default SignInProfile;
