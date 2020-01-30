import React, { useState } from "react";
import {
  IonButton,
  IonCardHeader,
  IonCardTitle,
 } from "@ionic/react";

import { ButtonGroup, Card, CardContent } from "./common/Card";
import { ScannerResults } from "./ScannerResults";

export default ({ planet, scanners, onMoveOn, onColonize }) => {
  const [visible, setVisible] = useState({
    atmosphere: false,
    gravity: false,
    temperature: false,
    water: false,
  });

  const buttonsEnabled = Object.values(visible).every(value => value);

  return <Card>
    <IonCardHeader>
      <IonCardTitle>
        Planeta encontrado
      </IonCardTitle>
    </IonCardHeader>
    <CardContent>
      <div>
        <p>The seedship enters orbit of the sixth moon of a gas giant orbiting a blue supergiant star. This system is part of a dense star cluster, and the sky is awash with light.</p>
        <ScannerResults
          scanners={scanners}
          planet={planet}
          onVisible={(key) => setVisible((state) => ({ ...state, [key]: true }))}
        />
      </div>
      <ButtonGroup>
        <IonButton disabled={!buttonsEnabled} expand="block" onClick={() => onMoveOn()}>Seguir em frente</IonButton>
        <IonButton disabled={!buttonsEnabled} expand="block" onClick={() => onColonize(planet)}>
          Estabelecer colônia
        </IonButton>
      </ButtonGroup>
    </CardContent>
  </Card>
};
