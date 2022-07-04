function InputComponent({ title, placeholder }) {
  return (
    <LabelStyle>
      {title}
      <InputStyle
        placeholder={placeholder}
        type="email"
        name="userEmail"
        value={userEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
    </LabelStyle>
  );
}

export default InputComponent;
