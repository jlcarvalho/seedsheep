import React from "react";
import {
  IonButton,
 } from "@ionic/react";

 import { ButtonGroup, Card, CardContent } from "./common/Card";

export default ({ text, onClick }) => (
  <Card>
    <CardContent>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      
      <ButtonGroup>
        <IonButton expand="block" onClick={onClick}>Jogar novamente</IonButton>
      </ButtonGroup>
    </CardContent>
  </Card>
);
