/* @flow */
export const REQUEST = 'sessions/REQUEST';

type stateType = {
    data: Array<Object>,
}

type actionOne = { type: string, payload: Object };

type actionType = actionOne;

const initialState = {
    data: [
        // homogenous rendering between sections
        {
            data: [
                { hello: 'Bong', strain: 'Pineapple Cookies 2', color: 'purple' },
                { hello: 'Vape', strain: 'Blueberry Haze', color: 'orange' },
            ],
            title: 'TODAY',
        },
        {
            data: [
                { hello: 'DAB', strain: 'Pineapple Express', color: 'green' },
                { hello: 'DAB', strain: 'Lemon Berry', color: 'orange' },
            ],
            title: 'YESTERDAY',
        },
        {
            data: [
                { hello: 'DAB', strain: 'OG God Bud', color: 'purple' },
                { hello: 'DAB', strain: 'Trainwreck', color: 'green' },
                { hello: 'DAB', strain: 'Blueberry Haze', color: 'orange' },
            ],
            title: 'NOVEMBER 14TH',
        },
        {
            data: [
                { hello: 'DAB', strain: 'OG God Bud', color: 'purple' },
                { hello: 'DAB', strain: 'Trainwreck', color: 'green' },
                { hello: 'DAB', strain: 'Blueberry Haze', color: 'orange' },
            ],
            title: 'NOVEMBER 13TH',
        },
    ],
};

export default function reducer(state: stateType = initialState, action: actionType): stateType {
    switch (action.type) {
    default:
        return state;
    }
}
