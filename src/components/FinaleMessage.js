import React from 'react';
import styled from 'styled-components';

import {
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

import { Card, CardContent } from './common/Card';
import { Button, ButtonGroup } from './common/Button';
import { LazyContent, TIME_BETWEEN_CONTENT } from './common/Async';
import ScannerResults from './ScannerResults';
import ScoreTable from './ScoreTable';

const FinaleText = styled.div`
  p:last-child {
    margin: 0;
  }
`;

export default ({
  messages, scanners, colonists, colonizedPlanet, onClick,
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

      <FinaleText>
        {
          messages.map((text, index) => (
            <LazyContent key={text} ms={TIME_BETWEEN_CONTENT * index}>
              <p>{text}</p>
            </LazyContent>
          ))
        }
      </FinaleText>

      {
        <LazyContent ms={messages.length * TIME_BETWEEN_CONTENT}>
          <hr />

          <ScoreTable
            className="ion-margin-bottom"
            scanners={scanners}
            planet={colonizedPlanet}
            colonists={colonists}
          />

          <ButtonGroup>
            <Button expand="block" handleClick={onClick}>Jogar novamente</Button>
          </ButtonGroup>
        </LazyContent>
      }
    </CardContent>
  </Card>
);
