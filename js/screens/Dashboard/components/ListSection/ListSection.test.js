import React from 'react';
import renderer from 'react-test-renderer';

import ListSection from './ListSection';

const props = {};

it('renders without crashing', () => {
    const rendered = renderer.create(<ListSection {...props} />).toJSON();
    expect(rendered).toBeTruthy();
});
