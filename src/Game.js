import React, { useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import {
  IonContent,
  IonPage,
} from '@ionic/react';
import get from 'lodash/get';
import sample from 'lodash/sample';
import sampleSize from 'lodash/sampleSize';
import { useLocalStorage, deleteFromStorage } from '@rehooks/local-storage';

import ResourcesInfo from './components/ResourcesInfo';
import Intro from './components/Intro';
import PlanetFound from './components/PlanetFound';
import Incident from './components/Incident';
import IncidentMessage from './components/IncidentMessage';
import FinaleMessage from './components/FinaleMessage';

import planetStats from './data/planetStats';
import randomIncidents from './data/randomIncidents';
import surfaceFeatures from './data/surfaceFeatures';

import { getRandomNumberBetween, generateMessage } from './utils';

/**
 * TODO
 *
 * - Criar história do jogo (1.0)
 * - Considerar o `systems` no <FinaleMessage /> (1.0)
 *
 * - Implementar highscores (2.0)
 * - Implementar i18n (2.0)
 * - Implementar share no final do jogo (2.0)
 * - Implementar settlementIncident (2.0)
 * - Testar aplicação com jest (2.0)
 * - Remover <ResourcesInfo /> de dentro do <Incident /> e do <IncidentMessage /> (2.0)
 * - Implementar controles de audio (2.0)
 */

const initialState = {
  colonists: {
    label: 'Colonizadores',
    health: 1000,
  },
  scanners: {
    atmosphere: {
      label: 'Atmosfera',
      health: 100,
    },
    gravity: {
      label: 'Gravidade',
      health: 100,
    },
    temperature: {
      label: 'Temperatura',
      health: 100,
    },
    water: {
      label: 'Água',
      health: 100,
    },
    vegetation: {
      label: 'Vegetação',
      health: 100,
    },
  },
  systems: {
    construction: {
      label: 'Construção', // Ovelhas constroem?
      health: 100,
    },
    cooling: {
      label: 'Refrigeração',
      health: 100,
    },
    landing: {
      label: 'Aterrissagem',
      health: 100,
    },
    oxygen: {
      label: 'Oxigênio',
      health: 100,
    },
  },
  planetsVisited: 0,
  eventType: 'intro',
  payload: {},
};

const Game = () => {
  const { newGame } = useParams();

  useEffect(() => {
    if (newGame === 'new') {
      deleteFromStorage('seedsheep');
    }
  }, [newGame]);

  const [state, setState] = useLocalStorage(
    'seedsheep',
    { ...initialState },
  );

  const randomizePlanet = () => {
    const scannersValues = Object.values(state.scanners);

    if (
      scannersValues.filter(({ health }) => health === 0).length > scannersValues.length / 2
      || Object.values(state.systems).some(({ health }) => health === 0)
    ) {
      // Game Over
      setState({
        ...state,
        eventType: 'finaleMessage',
        payload: {
          messages: ['A nave está muito danificada para continuar sua busca, o rebanho se perdeu para sempre...'],
        },
      });
    } else if (state.colonists.health === 0) {
      // Game Over
      setState({
        ...state,
        eventType: 'finaleMessage',
        payload: {
          messages: ['Todas as ovelhas morreram...'],
        },
      });
    } else {
      setState({
        ...state,
        planetsVisited: state.planetsVisited + 1,
        eventType: 'planet',
        payload: {
          planet: {
            scanners: Object.entries(initialState.scanners).reduce((acc, [key]) => {
              const scanners = acc;
              scanners[key] = sample(planetStats[key]);
              return scanners;
            }, {}),
            features: sampleSize(surfaceFeatures, getRandomNumberBetween(1, 3)),
          },
        },
      });
    }
  };

  const randomizeIncident = () => {
    const currentEvent = sample(
      randomIncidents
        .filter(({ choices }) => choices.every(({ target }) => get(state, target).health > 0)),
    );

    setState({
      ...state,
      payload: {
        choices: state.payload.choices,
        currentEvent,
      },
      eventType: 'incident',
    });
  };

  const selectChoice = (choice) => {
    const resource = get(state, choice.target);
    const damage = getRandomNumberBetween(choice.minDamage, choice.maxDamage);
    const valueAfterDamage = resource.health - damage;
    const health = valueAfterDamage > 0 ? valueAfterDamage : 0;

    const [type, target] = choice.target.split('.');

    const message = generateMessage({
      text: choice.message,
      damage,
      health,
      label: resource.label,
      type,
    });

    if (type === 'colonists') {
      setState({
        ...state,
        eventType: 'incidentMessage',
        colonists: { ...state.colonists, health },
        payload: {
          message,
        },
      });
    } else {
      setState({
        ...state,
        eventType: 'incidentMessage',
        [type]: {
          ...state[type],
          [target]: { ...resource, health },
        },
        payload: {
          message,
        },
      });
    }
  };

  const colonize = (colonizedPlanet) => {
    const aggregatedPlanetNames = Object.values(colonizedPlanet.scanners)
      .reduce((acc, { planetNames }) => ([...acc, ...planetNames]), []);

    setState({
      ...state,
      eventType: 'finaleMessage',
      payload: {
        colonizedPlanet: {
          name: sample(aggregatedPlanetNames),
          ...colonizedPlanet,
        },
        messages: [
          ...Object.values(colonizedPlanet.scanners),
          ...Object.values(colonizedPlanet.features),
        ]
          .map((resource) => resource.finale()),
      },
    });
  };

  const reset = () => {
    setState(initialState);
  };

  const is = (eventType) => state.eventType === eventType;

  return (
    <IonPage>
      <IonContent>
        {is('intro') && <Intro onClick={() => randomizePlanet()} />}

        {is('planet') && (
          <PlanetFound
            {...state.payload}
            scanners={state.scanners}
            onMoveOn={() => randomizeIncident()}
            onColonize={(planet) => colonize(planet)}
          />
        )}

        {is('incident') && (
          <Incident
            {...state.payload}
            onSelect={(choice) => selectChoice(choice)}
          >
            <ResourcesInfo
              scanners={state.scanners}
              colonists={state.colonists}
              systems={state.systems}
            />
          </Incident>
        )}

        {is('incidentMessage') && (
          <IncidentMessage
            {...state.payload}
            onClick={() => randomizePlanet()}
          >
            <ResourcesInfo
              scanners={state.scanners}
              colonists={state.colonists}
              systems={state.systems}
            />
          </IncidentMessage>
        )}

        {is('finaleMessage') && (
          <FinaleMessage
            {...state.payload}
            scanners={state.scanners}
            colonists={state.colonists}
            systems={state.systems}
            onClick={() => reset()}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Game);
