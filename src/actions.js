export const UPDATE_FIRST_VALUE = 'UPDATE_FIRST_VALUE';
export const UPDATE_SECOND_VALUE = 'UPDATE_SECOND_VALUE';

export const updateFirstValue = (value) => ({
    type: UPDATE_FIRST_VALUE,
    payload: value,
});

export const updateSecondValue = (value) => ({
    type: UPDATE_SECOND_VALUE,
    payload: value,
});