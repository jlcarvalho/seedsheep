import styled from "styled-components";
import {
  IonCard,
  IonCardContent,
 } from "@ionic/react";

export const ButtonGroup = styled.div`
  margin-top: 10px;

  button + button {
    margin-left: 10px;
  }
`;

export const Card = styled(IonCard)`
  min-height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${ButtonGroup} {
    margin-top: auto;
  }
`;
