import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main';

const props = {};

it('renders without crashing', () => {
    const rendered = renderer.create(<Main {...props} />).toJSON();
    expect(rendered).toBeTruthy();
});
