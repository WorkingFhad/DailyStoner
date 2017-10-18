import React from 'react';
import renderer from 'react-test-renderer';

import StartSection from './StartSection';

const props = {};

it('renders without crashing', () => {
    const rendered = renderer.create(<StartSection {...props} />).toJSON();
    expect(rendered).toBeTruthy();
});
