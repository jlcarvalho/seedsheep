import React from "react";
import {
  IonButton,
  IonCardHeader,
  IonCardTitle,
 } from "@ionic/react";

 import { ButtonGroup, Card, CardContent } from "./common/Card";

export default ({ text, choices, onSelect, children }) => (
  <Card>
    {children}

    <IonCardHeader>
      <IonCardTitle>Perigo</IonCardTitle>
    </IonCardHeader>
    
    <CardContent>
      <p>{text}</p>

      <ButtonGroup>
        {choices.map(choice => (
          <IonButton expand="block" key={choice.target} onClick={() => onSelect(choice)}>
            {choice.description}
          </IonButton>
        ))}
      </ButtonGroup>
    </CardContent>
  </Card>
);
