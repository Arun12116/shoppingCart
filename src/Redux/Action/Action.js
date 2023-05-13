import ActionType  from "../Constant/Action-type"
export const SetProduct = (product) => {

    return {
        type: ActionType.SET_PRODUCT,
        payload: product

    }

}

export const SelectedProduct = (singleproduct) => {

    return {
        type:ActionType.SELECTED_PRODUCT,
        payload: singleproduct
    }
}
