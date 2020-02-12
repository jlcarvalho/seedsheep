import React, { Component } from 'react';
import styled from 'styled-components';
import { IonButton } from '@ionic/react';
import isEqual from 'lodash/isEqual';

import buttonSound from '../../sounds/button.mp3';

export const ButtonGroup = styled.div`
  margin-top: 10px;

  button + button {
    margin-left: 10px;
  }
`;

// Servir esse arquivo do nosso servidor
const audio = new Audio(buttonSound);
audio.volume = 0.5;

export class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  onClick(e) {
    audio.play();

    const { handleClick } = this.props;
    if (handleClick) {
      e.preventDefault();

      audio.play();
      handleClick(e);
    }
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <IonButton onClick={(e) => this.onClick(e)} {...props}>
        {children}
      </IonButton>
    );
  }
}
