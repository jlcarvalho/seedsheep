import React, { useEffect, useState } from 'react';
import {
  IonChip,
} from '@ionic/react';

import { getRandomNumberBetween, getColorFromQuality } from '../utils';

const FeaturesResults = ({ label, features, onVisible = () => {} }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showResult = () => {
      setVisible(true);
      onVisible();
    };

    const timer = setTimeout(
      showResult,
      getRandomNumberBetween(500, 1500),
    );

    return () => clearTimeout(timer);
  }, [onVisible]);

  return visible
    ? features.map((feature) => (
      <IonChip
        key={feature.name}
        color={getColorFromQuality(feature.quality)}
      >
        {feature.name}
      </IonChip>
    ))
    : (
      <IonChip color="medium">Escaneando {label}...</IonChip>
    );
};

export default FeaturesResults;
