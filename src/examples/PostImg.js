import { useState } from "react";
import axios from "axios";

const PostImg = () => {
  const [testimg, setImg] = useState(); // 얘는 이미지데이터 담는 용도
  const [fileName, setFileName] = useState(); // 얘는 출력용

  function getFileName() {
    let formData = new FormData();

    console.log("이미지 변수", testimg);

    // 이미지가 담긴 변수를 formData에 요소로 추가
    // key : image(string) / value : testimg(변수)
    formData.append("image", testimg);

    // formData에 잘들어갔나 확인
    console.log(formData.get("image"));

    // formData 객체를 body에 실어서 전송
    axios
      .post("https://mandarin.api.weniv.co.kr/image/uploadfiles", formData)
      .then((res) => {
        // 리스폰스 받기.
        console.log(res);

        // 출력용 변수 (fileName)에 리스폰스 값 중 하나인 filename 집어넣기.
        setFileName(res.data[0].filename);
      });
  }

  return (
    <>
      <button onClick={getFileName}>통신 버튼</button>
      <p>{fileName}</p>
      <input
        type="file"
        accept="image/*" // 이미지만 허용
        onChange={(e) => {
          console.log(e.target.files[0]);
          setImg(e.target.files[0]);
        }}
      />
    </>
  );
};

export default PostImg;
