import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Input from "./Input";
import reportWebVitals from "./reportWebVitals";
import SignInMain from "./Test/SignInMain";
import SignIn from "./Test/SignIn";
import PostImg from "./examples/PostImg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Input /> */}
    {/* <App/> */}
    {/* <SignIn /> */}
    <PostImg />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
