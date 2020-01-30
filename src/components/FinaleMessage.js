import React from "react";
import styled from "styled-components";

import {
  IonButton,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

import { ButtonGroup, Card, CardContent } from "./common/Card";
import { ScannerResults } from "./ScannerResults";
import ScoreTable from "./ScoreTable";

const FinaleText = styled.div`
  p:last-child {
    margin: 0;
  }
`;

export default ({ text, scanners, colonists, systems, currentPlanet, onClick }) => {
  return (
    <Card>
      <IonCardHeader>
        <IonCardTitle>
          Planeta Terra 2.0
        </IonCardTitle>
      </IonCardHeader>

      <CardContent>
        <div>
          <ScannerResults
            scanners={scanners}
            planet={currentPlanet}
            instant
          />
        </div>

        <hr />

        <FinaleText dangerouslySetInnerHTML={{ __html: text }} />

        <hr />

        <ScoreTable
          className="ion-margin-bottom"
          scanners={scanners}
          planet={currentPlanet} 
          colonists={colonists}
        />
        
        <ButtonGroup>
          <IonButton expand="block" onClick={onClick}>Jogar novamente</IonButton>
        </ButtonGroup>
      </CardContent>
    </Card>
  )
}
