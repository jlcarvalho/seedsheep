import React, { Component } from 'react';
import styled from 'styled-components';
import {
  IonCardHeader,
  IonCardTitle,
  IonText,
} from '@ionic/react';
import isEqual from 'lodash/isEqual';

import { Card, CardContent } from './common/Card';
import { Button, ButtonGroup } from './common/Button';
import ScannerResults from './ScannerResults';
import FeaturesResults from './FeaturesResults';

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
            <FeaturesResults
              features={planet.features}
              label="Recursos"
              onVisible={() => this.setState((state) => ({ ...state, features: true }))}
            />
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
