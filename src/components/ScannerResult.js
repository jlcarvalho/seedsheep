import React, { useEffect, useState } from "react";
import {
  IonChip,
 } from "@ionic/react";

import { getRandomNumberBetween } from "../utils";

export const ScannerResult = ({ label, stat, onVisible }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setVisible(true);
        onVisible();
      },
      getRandomNumberBetween(500, 1000)
    );

    return () => clearTimeout(timer);
  }, [onVisible]);

  return visible
    ? <IonChip color={stat.color}>{stat.name}</IonChip> 
    : <IonChip color="medium">Escaneando {label}...</IonChip>
};