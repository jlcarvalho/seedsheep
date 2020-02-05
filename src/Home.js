import React from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '@rehooks/local-storage';

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from '@ionic/react';

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

export default () => {
  const [lastGame] = useLocalStorage('seedsheep');

  return (
    <IonPage>
      <IonContent>
        <Card>
          <IonCardHeader>
            <Title>Seedsheep</Title>
          </IonCardHeader>

          <IonCardContent>
            <IonButton expand="block" routerLink="/game/new">
              Iniciar jogo
            </IonButton>
            <IonButton
              expand="block"
              fill="clear"
              color="light"
              routerLink="/game/continue"
              disabled={!lastGame}
            >
              Continuar jogo
            </IonButton>
            <IonButton
              expand="block"
              fill="clear"
              color="light"
              routerLink="/credits"
            >
              Créditos
            </IonButton>
          </IonCardContent>
        </Card>
      </IonContent>
    </IonPage>
  );
};
