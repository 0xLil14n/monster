import React from "react";
import { Card } from "../card/card.component";
import styled from "styled-components";
export const CardList = (props) => {
  return (
    <StyledCardList>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </StyledCardList>
  );
};
const StyledCardList = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
