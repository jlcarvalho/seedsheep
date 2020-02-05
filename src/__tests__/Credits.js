import React from 'react';
import { shallow } from 'enzyme';
import Credits from '../Credits';

describe('<Credits />', () => {
  it('renders without crashing', () => {
    shallow(<Credits />);
  });
});
