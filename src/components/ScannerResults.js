import React, { Component } from 'react';

import ScannerResult from './ScannerResult';
import { getRandomNumberBetween } from '../utils';

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

    return Object.entries(scanners).map(([key, { label, health }]) => (
      <ScannerResult
        key={key}
        label={label}
        stat={getStat({
          value: planet.scanners[key], health, scanner: label, instant,
        })}
        instant={instant}
        onVisible={() => onVisible(key)}
      />
    ));
  }
}
