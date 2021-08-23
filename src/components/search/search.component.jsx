import React from "react";
import styled from "styled-components";

export const Search = (props) => {
  const { placeholderText, handleChange } = props;
  return (
    <StyledSearchBox
      type="search"
      placeholder={props.placeholderText}
      onChange={handleChange}
    />
  );
};

const StyledSearchBox = styled.input`
  padding: 10px;
  -webkit-appearance: none;
  border: none;
  outline: none;
  line-height: 30px;
  width: 150px;
  margin-bottom: 30px;
`;
