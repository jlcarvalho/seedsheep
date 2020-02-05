import React from 'react';
import {
  IonButton,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

import { ButtonGroup, Card, CardContent } from './common/Card';

export default ({ onClick }) => (
  <Card>
    <IonCardHeader>
      <IonCardTitle>
        E a terra estava condenada...
      </IonCardTitle>
    </IonCardHeader>
    <CardContent>
      <p>Assim como a humanidade...</p>
      <p>
        Em um último esforço para tentar salvar os seres que habitam na terra,
        a humanidade construiu uma arca, mas na hora de enchê-la com animais apenas as
        ovelhas apareceram.
      </p>
      <p>
        E foi assim que a humanidade enviou uma nave com 1000 ovelhas através do universo
        para encontrar um novo lar para esses seres fofinhos.
      </p>
      <ButtonGroup>
        <IonButton expand="block" onClick={() => onClick()}>Buscar planeta</IonButton>
      </ButtonGroup>
    </CardContent>
  </Card>
);
