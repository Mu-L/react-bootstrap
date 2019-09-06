import React from 'react';
import { mount } from 'enzyme';

import ListGroup from '../src/ListGroup';

describe('<ListGroup>', () => {
  it('Should render correctly "list-group"', () => {
    mount(<ListGroup />).assertSingle('div.list-group');
  });

  it('accepts <ListGroup.Item> children', () => {
    mount(
      <ListGroup>
        <ListGroup.Item>hey!</ListGroup.Item>
      </ListGroup>,
    ).assertSingle('div.list-group-item');
  });

  it('accepts variant', () => {
    mount(<ListGroup variant="flush" />).assertSingle(
      'div.list-group.list-group-flush',
    );
  });

  it('accepts global horizontal', () => {
    mount(<ListGroup layout="horizontal" />).assertSingle(
      'div.list-group.list-group-horizontal',
    );
  });
  it('accepts responsive horizontal', () => {
    mount(<ListGroup layout="horizontal-sm" />).assertSingle(
      'div.list-group.list-group-horizontal-sm',
    );
    mount(<ListGroup layout="horizontal-md" />).assertSingle(
      'div.list-group.list-group-horizontal-md',
    );
    mount(<ListGroup layout="horizontal-lg" />).assertSingle(
      'div.list-group.list-group-horizontal-lg',
    );
    mount(<ListGroup layout="horizontal-xl" />).assertSingle(
      'div.list-group.list-group-horizontal-xl',
    );
  });

  it('accepts as prop', () => {
    mount(<ListGroup as="ul" />).assertSingle('ul.list-group');
  });
});
