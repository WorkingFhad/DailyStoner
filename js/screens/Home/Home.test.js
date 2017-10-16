import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

const props = {};

it('renders without crashing', () => {
    const rendered = renderer.create(<Home {...props} />).toJSON();
    expect(rendered).toBeTruthy();
});
