import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  margin-top: 10px;
  display: block;
  background-color: white;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 5px;
  :hover {
    border-color: #1d57c1;
  }
  :focus {
    outline-color: #1d57c1;
  }
  ::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
`;

export const LabelStyle = styled.label`
  margin: 10px;
  display: block;
  font-size: 12px;
  color: #767676;
`;

export const SearchInput = styled.input`
  margin: 10px;
  padding: 8px 12px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 32px;
  font-size: 14px;
  box-sizing: border-box;
  ::placeholder {
    color: #c4c4c4;
    font-size: 14px;
  }
  :focus {
    outline-color: #1d57c1;
  }
`;
