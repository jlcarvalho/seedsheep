import React from 'react';
import {
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

import { Card, CardContent } from './common/Card';
import { Button, ButtonGroup } from './common/Button';

export default ({ message, onClick, children }) => (
  <Card>
    {children}

    <IonCardHeader>
      <IonCardTitle>Atenção</IonCardTitle>
    </IonCardHeader>

    <CardContent>
      <p>
        {message}
      </p>

      <ButtonGroup>
        <Button expand="block" handleClick={onClick}>Seguir em frente</Button>
      </ButtonGroup>
    </CardContent>
  </Card>
);
