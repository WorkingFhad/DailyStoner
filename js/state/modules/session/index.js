/* @flow */
export const SEND_MESSAGE = 'session/SEND_MESSAGE';

export const sendMessage = message => ({
    type: SEND_MESSAGE,
    payload: {
        message,
    },
});

type stateType = {
    data: Array<Object>,
}

type actionOne = { type: string, payload: Object };

type actionType = actionOne;

const initialState = {
    meta: {},
    chat: [
        {
            id: 0,
            message: 'Hey Josh, Good to see you again! What are we having this evening?',
            user: 0,
        },
        {
            id: 1,
            message: 'Sour Diesel',
            user: 1,
        },
        {
            id: 2,
            message: 'Awesome! How are you consuming the Sour Diesel?',
            user: 0,
        },
        {
            id: 3,
            message: 'Vape',
            user: 1,
        },
        {
            id: 4,
            message: 'Next question coming up',
            user: 0,
        },
    ],
    answers: {
        strain: null,
        method: null,
    },
};

export default function reducer(state: stateType = initialState, action: actionType): stateType {
    switch (action.type) {
    case SEND_MESSAGE: {
        return {
            ...state,
            chat: [
                ...state.chat,
                action.payload.message,
            ],
        };
    }
    default:
        return state;
    }
}
