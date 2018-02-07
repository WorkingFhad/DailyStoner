export const ADD_METHOD = 'assets/ADD_METHOD';

export const addMethod = method => ({
    type: ADD_METHOD,
    payload: {
        method,
    },
});

const initialState = {
    methods: ['Joint'],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case ADD_METHOD: {
        return {
            ...state,
            methods: [
                ...state.methods,
                action.payload.method,
            ],
        };
    }
    default:
        return state;
    }
}
