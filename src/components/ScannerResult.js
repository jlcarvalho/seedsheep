import React, { useEffect, useState } from "react";
import {
  IonChip,
 } from "@ionic/react";

import { getRandomNumberBetween, getColorFromQuality } from "../utils";

export const ScannerResult = ({ label, stat, instant = false, onVisible = () => {} }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showResult = () => {
      setVisible(true);
      onVisible();
    }

    if (!instant) {
      const timer = setTimeout(
        showResult,
        getRandomNumberBetween(500, 1500)
      );
  
      return () => clearTimeout(timer);
    } else { 
      showResult();
    }
  }, [onVisible, instant]);

  return visible
    ? <IonChip color={getColorFromQuality(stat.quality)}>{stat.name}</IonChip> 
    : <IonChip color="medium">Escaneando {label}...</IonChip>
};