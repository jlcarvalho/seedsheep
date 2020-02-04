import React, { useReducer } from "react";
import { withRouter } from 'react-router-dom';
import {
  IonContent,
  IonPage 
 } from "@ionic/react";
 import get from "lodash/get";
 import pick from "lodash/pick";

import ResourcesInfo from "./components/ResourcesInfo";
import Intro from "./components/Intro";
import PlanetFound from "./components/PlanetFound";
import Incident from "./components/Incident";
import IncidentMessage from "./components/IncidentMessage";
import FinaleMessage from "./components/FinaleMessage";

import planetStats from "./data/planetStats";
import randomIncidents from "./data/randomIncidents";

import { getRandomItem, getRandomNumberBetween } from "./utils";

/**
 * TODO
 *
 * - Criar história do jogo
 * - Remover <ResourcesInfo /> de dentro do <Incident /> e do <IncidentMessage />
 * - Implementar settlementIncident
 * - Implementar nível tecnológico (?)
 * - Implementar nível cultural (?)
 * - Implementar share no final do jogo
 * - Implementar continuar jogo
 * - Implementar highscores
 */

const initialState = {
  colonists: {
    label: "Colonizadores",
    health: 1000
  },
  scanners: {
    atmosphere: {
      label: "Atmosfera",
      health: 100
    },
    gravity: {
      label: "Gravidade",
      health: 100
    },
    temperature: {
      label: "Temperatura",
      health: 100
    },
    water: {
      label: "Água",
      health: 100
    },
    vegetation: {
      label: "Vegetação",
      health: 100
    }
  },
  systems: {
    construction: {
      label: "Construção",
      health: 100
    },
    cooling: {
      label: "Refrigeração",
      health: 100
    },
    landing: {
      label: "Aterrissagem",
      health: 100
    },
    oxygen: {
      label: "Oxigênio",
      health: 100
    }
  },
  planetsVisited: 0,
  eventType: "intro",
};

const Game = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { ...initialState }
  );

  const randomizePlanet = () => {
    const scannersValues = Object.values(state.scanners);

    if (
      scannersValues.filter(({ health }) => health === 0).length > scannersValues.length / 2 || // Metade + 1 dos scanners falharam
      Object.values(state.systems).some(({ health }) => health === 0)                           // Algum dos sistemas críticos da nave falhou
    ) {
      // Game Over
      setState({
        eventType: "finaleMessage",
        message: "A nave está muito danificada para continuar sua busca, o rebanho se perdeu para sempre..."
      });
    } else if (state.colonists.health === 0) {
      // Game Over
      setState({
        eventType: "finaleMessage",
        message: "Todos os colonizadores morreram..."
      });
    } else {
      setState({
        currentPlanet: {
          scanners: Object.entries(initialState.scanners).reduce((scanners, [key]) => {
            scanners[key] = getRandomItem(planetStats[key]);
            return scanners;
          }, {}),
          features: []
        },
        planetsVisited: state.planetsVisited + 1,
        eventType: "planet"
      });
    }
  };

  const randomizeIncident = () => {
    const currentEvent = getRandomItem(
      randomIncidents.filter(({ choices }) =>
        choices.every(({ target }) => get(state, target).health > 0)
      )
    );

    setState({
      currentEvent,
      eventType: "incident"
    });
  };

  const selectChoice = choice => {
    const resource = get(state, choice.target);
    const damage = getRandomNumberBetween(choice.minDamage, choice.maxDamage);
    const valueAfterDamage = resource.health - damage;
    const health = valueAfterDamage > 0 ? valueAfterDamage : 0;

    const [ type, target ] = choice.target.split(".");

    if (type === "colonists") {
      setState({
        message: choice.message({ damage, health, label: resource.label, type }),
        eventType: "incidentMessage",
        colonists: { ...state.colonists, health }
      });
    } else {
      setState({
        message: choice.message({ damage, health, label: resource.label, type }),
        eventType: "incidentMessage",
        [type]: {
          ...state[type],
          [target]: { ...resource, health }
        }
      });
    }
  };

  const colonize = colonizedPlanet => {
    const planetNames = Object.values(colonizedPlanet.scanners)
      .reduce((acc, { planetNames }) => ([...acc, ...planetNames]), []);

    setState({
      colonizedPlanet: {
        name: getRandomItem(planetNames),
        ...colonizedPlanet
      },
      message: Object.keys(colonizedPlanet.scanners)
        .map(key => `<p>${colonizedPlanet.scanners[key].finale(0)}</p>`)
        .join(" "),
      eventType: "finaleMessage"
    });
  };

  const reset = () => {
    setState(initialState);
  };

  const is = eventType => state.eventType === eventType;

  return (
    <IonPage>
      <IonContent>
        {is("intro") && <Intro onClick={() => randomizePlanet()} />}

        {is("planet") && (
          <PlanetFound
            scanners={state.scanners}
            planet={state.currentPlanet}
            onMoveOn={() => randomizeIncident()}
            onColonize={planet => colonize(planet)}
          />
        )}

        {is("incident") && (
          <Incident
            text={state.currentEvent.description}
            choices={state.currentEvent.choices}
            onSelect={choice => selectChoice(choice)}
          >
            <ResourcesInfo
              {...pick(state, ["scanners", "colonists", "systems"])}
            />
          </Incident>
        )}

        {is("incidentMessage") && (
          <IncidentMessage
            text={state.message}
            onClick={() => randomizePlanet()}
          >
            <ResourcesInfo
              {...pick(state, ["scanners", "colonists", "systems"])}
            />
          </IncidentMessage>
        )}

        {is("finaleMessage") && (
          <FinaleMessage
            {...pick(state, ["scanners", "colonists", "systems", "colonizedPlanet"])}
            text={state.message}
            onClick={() => reset()}
          />
        )}
      </IonContent>
    </IonPage>
  );
}

export default withRouter(Game);
