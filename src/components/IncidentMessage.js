import React from "react";
import {
  IonButton,
  IonCardHeader,
  IonCardTitle,
 } from "@ionic/react";

import { ButtonGroup, Card, CardContent } from "./common/Card";

export default ({ text, onClick, children }) => (
  <Card>
    {children}

    <IonCardHeader>
      <IonCardTitle>Atenção</IonCardTitle>
    </IonCardHeader>

    <CardContent>
      <p>
        {text}
      </p>

      <ButtonGroup>
        <IonButton expand="block" onClick={onClick}>Seguir em frente</IonButton>
      </ButtonGroup>
    </CardContent>
  </Card>
);
