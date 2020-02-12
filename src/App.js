import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp, IonRouterOutlet, setupConfig,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { volumeHigh, volumeOff } from 'ionicons/icons';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';

import './styles.css';

import soundtrack from './sounds/soundtrack.mp3';
import silence from './sounds/silence.mp3';

import Home from './Home';
import Game from './Game';
import Credits from './Credits';

setupConfig({
  mode: 'md',
});

// const audio = new Audio(soundtrack);
// audio.volume = 0.03;
// audio.loop = true;
// audio.muted = false;
// audio.autoplay = true;

export default () => (
  <>
    <iframe
      title="Silence"
      src={silence}
      allow="autoplay"
      style={{
        display: 'none',
      }}
    />
    <audio
      volume="0.3"
      loop
      autoPlay
      src={soundtrack}
    />
    {/* <IonButton
        onClick={toggleMuted}
        style={{
          position: 'absolute', top: '21px', right: '10px', zIndex: 9999,
        }}
        fill="clear"
        color="light"
        size="small"
      >
        <IonIcon slot="icon-only" icon={muted ? volumeOff : volumeHigh} />
      </IonButton> */}
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route path="/game/:newGame" component={Game} />
          <Route path="/credits" component={Credits} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </>
);
