import React, { Component } from "react";

import { ScannerResult } from "./ScannerResult";
import { getRandomNumberBetween } from "../utils";

const getStat = ({ scanner, health, value }) =>
  getRandomNumberBetween(0, 100) < health
    ? value
    : { color: "darkred", name: `Escaneamento de ${scanner.toLowerCase()} falhou` };

// https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate
export class ScannerResults extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { scanners, planet, onVisible } = this.props;

    return Object.entries(scanners).map(([key, { label, health }]) => (
      <ScannerResult
        key={key}
        label={label}
        stat={getStat({ value: planet.scanners[key], health, scanner: label })}
        onVisible={() => onVisible(key)}
      />
    ))
  }
}
