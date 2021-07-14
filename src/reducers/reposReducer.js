const SET_COUNT = "SET_COUNT";

const initialState = {
  items: ["55", "44"],
    isFetching: true,
    count: 0
};

export const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
};

export const setCount = (count) =>({type: SET_COUNT, payload:count})
