import React from "react";
import styled from "styled-components";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage 
} from "@ionic/react";

const Card = styled(IonCard)`
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
`;

const Title = styled(IonCardTitle)`
  font-size: 24px;
  text-align: center;
`; 

export default () => (
  <IonPage>
    <IonContent>
      <Card>
        <IonCardHeader>
          <Title>Seedsheep</Title>
        </IonCardHeader>

        <IonCardContent>
          <IonButton expand="block" routerLink="/game">
            Iniciar jogo
          </IonButton>
          <IonButton expand="block" fill="clear" color="light" routerLink="/credits">
            Créditos
          </IonButton>
        </IonCardContent>
      </Card>
    </IonContent>
  </IonPage>
);
