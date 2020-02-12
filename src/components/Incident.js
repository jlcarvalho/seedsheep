import React from 'react';
import {
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

import { Card, CardContent } from './common/Card';
import { Button, ButtonGroup } from './common/Button';

export default ({
  currentEvent, onSelect, children,
}) => {
  const { description, choices } = currentEvent;

  return (
    <Card>
      {children}

      <IonCardHeader>
        <IonCardTitle>Perigo</IonCardTitle>
      </IonCardHeader>

      <CardContent>
        <p>{description}</p>

        <ButtonGroup>
          {choices.map((choice) => (
            <Button expand="block" key={choice.target} handleClick={() => onSelect(choice)}>
              {choice.description}
            </Button>
          ))}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
