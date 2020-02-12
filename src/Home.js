import React from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '@rehooks/local-storage';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from '@ionic/react';

import { Button } from './components/common/Button';

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
            <Button expand="block" routerLink="/game/new">
              Iniciar jogo
            </Button>
            <Button
              expand="block"
              fill="clear"
              color="light"
              routerLink="/game/continue"
              disabled={!lastGame}
            >
              Continuar jogo
            </Button>
            <Button
              expand="block"
              fill="clear"
              color="light"
              routerLink="/credits"
            >
              Créditos
            </Button>
          </IonCardContent>
        </Card>
      </IonContent>
    </IonPage>
  );
};
