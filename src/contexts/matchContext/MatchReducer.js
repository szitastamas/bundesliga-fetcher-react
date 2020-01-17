import { SET_YEAR, SET_MATCH, CLEAR_YEAR, CLEAR_MATCH, TRIGGER_LOADING } from '../reducerTypes';

export default (state, action) => {
    switch (action.type) {
        case SET_YEAR:
            const { year, matches } = action.payload;

            return {
                ...state,
                year: year,
                matches: matches,
                loading: false
            };
        // case TRIGGER_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        default:
            return state;
    }
};
