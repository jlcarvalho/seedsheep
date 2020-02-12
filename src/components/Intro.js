import React from 'react';
import {
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

import { Card, CardContent } from './common/Card';
import { Button, ButtonGroup } from './common/Button';
import { LazyContent, TIME_BETWEEN_CONTENT } from './common/Async';

const introParagraphs = [
  'Assim como a humanidade...',
  `E em um último esforço para tentar salvar os seres que habitam na terra,
  a humanidade construiu uma arca, mas na hora de enchê-la com animais apenas as
  ovelhas apareceram.`,
  `Foi assim que a humanidade enviou uma nave com 1000 ovelhas através do universo
  para encontrar um novo lar para esses seres fofinhos.`,
  `Você é o segundo capitão dessa nave, o capitão anterior morreu durante um estouro
  do rebanho provocado por uma falha no sistema de hibernação das ovelhas.`,
  'Atualmente todos os sistemas estão saudáveis e operando em sua máxima capacidade.',
  `Eu sou Maria, a IA responsável por tomar as decisões triviais da nave.
  O seu papel como pastor e capitão é tomar as decisões morais que eu sou incapaz de tomar.`,
];

export default ({ onClick }) => (
  <Card>
    <IonCardHeader>
      <IonCardTitle>
        E a terra estava condenada...
      </IonCardTitle>
    </IonCardHeader>
    <CardContent>
      {
        introParagraphs.map((message, index) => (
          <LazyContent key={message} ms={index * TIME_BETWEEN_CONTENT}>
            <p>{message}</p>
          </LazyContent>
        ))
      }
      <LazyContent ms={(introParagraphs.length - 1) * TIME_BETWEEN_CONTENT}>
        <ButtonGroup>
          <Button expand="block" handleClick={() => onClick()}>Buscar planeta</Button>
        </ButtonGroup>
      </LazyContent>
    </CardContent>
  </Card>
);
