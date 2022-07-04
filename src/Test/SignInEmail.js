import { LabelStyle, InputStyle, SearchInput } from "../inputStyle";

function SignInEmail({
  userEmail,
  setEmail,
  userPassword,
  setPassword,
  setStep,
}) {
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
        <p onClick={() => setStep(1)}>다음</p>
      </LabelStyle>
    </>
  );
}

export default SignInEmail;
