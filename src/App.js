import React from "react";
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';

import "./styles.css";

import Home from "./Home";
import Game from "./Game";
import Credits from "./Credits";

setupConfig({
  mode: 'md'
});

export default () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route path="/game/:newGame" component={Game} />
        <Route path="/credits" component={Credits} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)