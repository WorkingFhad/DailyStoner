/* @flow */
export const REQUEST = 'sessions/REQUEST';

type stateType = {
    data: Array<Object>,
}

type actionOne = { type: string, payload: Object };

type actionType = actionOne;

const initialState = {
    data: [],
};

export default function reducer(state: stateType = initialState, action: actionType): stateType {
    switch (action.type) {
    default:
        return state;
    }
}
