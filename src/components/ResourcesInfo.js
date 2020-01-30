import React from "react";
import styled from "styled-components";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonProgressBar,
  IonText,
} from "@ionic/react";

const ProgressBar = styled(IonProgressBar)`
  max-width: 40%;
`;

const Grid = styled(IonGrid)`
  --ion-grid-padding: 12px;

  width: 100%;
  font-size: 14px;
  flex-grow: 0;
`;

const Col = styled(IonCol)`
  .resource-wrapper {
    font-size: 14px;
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled(IonText)`
  display: inline-block;
  margin-bottom: 8px;
`;

const getProgressColor = (value) => {
  if (value > 80) return "green";
  if (value > 50) return "orange";
  return "red";
}

const Resources = ({ title, data }) => (
  <>
    <Title>
      <strong>
        {title}
      </strong>
    </Title>
    {
      Object.values(data).map(resource => {
        const currentColor = getProgressColor(resource.health);
        return (
          <div key={resource.label} className="resource-wrapper">
            <IonText>
              {resource.label}
            </IonText>
            <ProgressBar
              value={resource.health / 100}
              color={currentColor}
            ></ProgressBar>
          </div>
        )
      })
    }
  </>
);

export default ({ scanners, colonists, systems }) => (
  <>
    <IonCardHeader>
      <IonCardTitle>Status da nave</IonCardTitle>
    </IonCardHeader>

    <Grid>
      <IonRow>
        <Col>
          <Title className="resource-wrapper">
            <strong>
              {colonists.label}
            </strong>
            {colonists.health}
          </Title>
        </Col>
        
        <Col></Col>
      </IonRow>

      <IonRow>
        <Col>
          <Resources data={scanners} title="Scanners" />
        </Col>

        <Col>
          <Resources data={systems} title="Sistemas" />
        </Col>
      </IonRow>
    </Grid>

    <hr/>
  </>
);
