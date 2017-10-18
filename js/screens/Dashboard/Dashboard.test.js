import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

const props = {};

it('renders without crashing', () => {
    const rendered = renderer.create(<Dashboard {...props} />).toJSON();
    expect(rendered).toBeTruthy();
});
