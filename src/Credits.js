import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from '@ionic/react';

export default () => (
  <IonPage>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Créditos</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>Jean Lucas de Carvalho</p>
          <Link to="/">Voltar</Link>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);
