import { UPDATE_FIRST_VALUE, UPDATE_SECOND_VALUE } from './actions';

const initialState = {
    convertFirstValue: 0,
    convertSecondValue: 0,
};

const limitToFourDecimals = (num) => parseFloat(num.toFixed(4));

const converterReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIRST_VALUE:
            return {
                ...state,
                convertFirstValue: limitToFourDecimals(action.payload),
                convertSecondValue: limitToFourDecimals(action.payload * 1.07),
            };
        case UPDATE_SECOND_VALUE:
            return {
                ...state,
                convertFirstValue: limitToFourDecimals(action.payload / 1.07),
                convertSecondValue: limitToFourDecimals(action.payload),
            };
        default:
            return state;
    }
};

export default converterReducer;