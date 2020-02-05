import React from 'react';
import styled from 'styled-components';

import {
  IonButton,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

import { ButtonGroup, Card, CardContent } from './common/Card';
import ScannerResults from './ScannerResults';
import ScoreTable from './ScoreTable';

const FinaleText = styled.div`
  p:last-child {
    margin: 0;
  }
`;

export default ({
  text, scanners, colonists, colonizedPlanet, onClick,
}) => (
  <Card>
    <IonCardHeader>
      <IonCardTitle>
          Planeta {colonizedPlanet.name}
      </IonCardTitle>
    </IonCardHeader>

    <CardContent>
      <div>
        <ScannerResults
          scanners={scanners}
          planet={colonizedPlanet}
          instant
        />
      </div>

      <hr />

      <FinaleText dangerouslySetInnerHTML={{ __html: text }} />

      <hr />

      <ScoreTable
        className="ion-margin-bottom"
        scanners={scanners}
        planet={colonizedPlanet}
        colonists={colonists}
      />

      <ButtonGroup>
        <IonButton expand="block" onClick={onClick}>Jogar novamente</IonButton>
      </ButtonGroup>
    </CardContent>
  </Card>
);
