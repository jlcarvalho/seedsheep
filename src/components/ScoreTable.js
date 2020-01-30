import React from "react";
import styled from "styled-components";

import { getScoreFromQuality } from "../utils";

const CustomTable = styled.table`
  font-size: 16px;
  text-align: right;
  
  thead, tfoot {
    font-weight: bold;

    td, th {
    }
  }

  td, th {
    padding: 0 0 8px;

    &:first-child {
      text-align: left;
    }
  }
`;

export default ({ scanners, planet, colonists, ...props }) => {
  let total = colonists.health;
  const scores = [];

  Object.entries(scanners).forEach(([key, { label }]) => {
    const value = getScoreFromQuality(planet.scanners[key].quality);

    scores.push({ key, label, value });
    total += value;
  });

  return (
    <CustomTable {...props}>
      <thead>
        <tr>
          <th colSpan={2}>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sobreviventes:</td>
          <td>{colonists.health}</td>
        </tr>
        {
          scores.map(({ key, label, value }) => (  
            <tr key={key}>
              <td>{label}:</td>
              <td>{value}</td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </CustomTable>
  )
};
