import React, { Component } from 'react';
import styled from 'styled-components';
import {
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonText,
} from '@ionic/react';
import isEqual from 'lodash/isEqual';

import { Card, CardContent } from './common/Card';
import { Button, ButtonGroup } from './common/Button';
import { LazyContent } from './common/Async';
import ScannerResults from './ScannerResults';

import { getRandomNumberBetween, getColorFromQuality } from '../utils';

const SurfaceFeatureTitle = styled(IonText)`
  margin: 16px 0;
  font-size: 14px;
`;

export default class PlanetFound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atmosphere: false,
      gravity: false,
      temperature: false,
      water: false,
      features: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState);
  }

  render() {
    const {
      planet, scanners, onMoveOn, onColonize,
    } = this.props;
    const buttonsEnabled = Object.values(this.state).every((value) => value);

    return (
      <Card>
        <IonCardHeader>
          <IonCardTitle>
            Planeta encontrado
          </IonCardTitle>
        </IonCardHeader>
        <CardContent>
          <div>
            <p>
              The seedship enters orbit of the sixth moon
              of a gas giant orbiting a blue supergiant star.
              This system is part of a dense star cluster,
              and the sky is awash with light.
            </p>
            <ScannerResults
              scanners={scanners}
              planet={planet}
              onVisible={(key) => this.setState((state) => ({ ...state, [key]: true }))}
            />
          </div>
          <SurfaceFeatureTitle>
            Recursos da superfície
          </SurfaceFeatureTitle>
          <div>
            <LazyContent
              ms={getRandomNumberBetween(1000, 2000)}
              fallback={<IonChip color="medium">Escaneando recursos...</IonChip>}
              onVisible={() => this.setState((state) => ({ ...state, features: true }))}
            >
              {
                planet.features.map((feature) => (
                  <IonChip
                    key={feature.name}
                    color={getColorFromQuality(feature.quality)}
                  >
                    {feature.name}
                  </IonChip>
                ))
              }
            </LazyContent>
          </div>
          <ButtonGroup>
            <Button disabled={!buttonsEnabled} expand="block" handleClick={() => onMoveOn()}>Seguir em frente</Button>
            <Button disabled={!buttonsEnabled} expand="block" handleClick={() => onColonize(planet)}>
              Estabelecer colônia
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    );
  }
}
