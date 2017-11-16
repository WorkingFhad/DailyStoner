import React from 'react';
import renderer from 'react-test-renderer';

import Sessions from './Sessions';

const props = {};

it('renders without crashing', () => {
    const rendered = renderer.create(<Sessions {...props} />).toJSON();
    expect(rendered).toBeTruthy();
});
