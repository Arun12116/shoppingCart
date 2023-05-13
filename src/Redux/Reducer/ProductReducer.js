import ActionType from "../Constant/Action-type";
const initialState = {
    Products: [],
}
export const productReaducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionType.SET_PRODUCT:
            return { ...state, Products: payload }

        default:
            return state;
    }

}

export const singleProductReducer = ((state ={}, { type, payload }) => {

    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload }

        default:
            return state

    }


})
