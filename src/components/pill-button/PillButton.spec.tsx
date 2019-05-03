import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PillButton from './PillButton';

describe('PillButton', () => {
  describe('render component', () => {
    it('renders default state', () => {
      const component = renderer.create(<PillButton />).toJSON();

      expect(component).toMatchSnapshot();
    });
  });
});
