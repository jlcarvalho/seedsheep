import React, { Component } from 'react';
import {
  IonChip,
} from '@ionic/react';

import { getRandomNumberBetween, getColorFromQuality } from '../utils';
import { LazyContent } from './common/Async';

const getStat = ({
  scanner, health, value, instant,
}) => (getRandomNumberBetween(0, 100) < health || instant
  ? value
  : { quality: 'not-identified', name: `Escaneamento de ${scanner.toLowerCase()} falhou` });

// https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate
export default class ScannerResults extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      scanners, planet, instant = false, onVisible = () => {},
    } = this.props;

    return Object.entries(scanners).map(([key, { label, health }]) => {
      const stat = getStat({
        value: planet.scanners[key], health, scanner: label, instant,
      });
      return (
        <LazyContent
          key={key}
          ms={instant ? 0 : getRandomNumberBetween(1000, 2000)}
          fallback={<IonChip color="medium">Escaneando {label}...</IonChip>}
          onVisible={() => onVisible(key)}
        >
          <IonChip color={getColorFromQuality(stat.quality)}>{stat.name}</IonChip>
        </LazyContent>
      );
    });
  }
}
