export const update_product = (product) => {
    return {
        type:"UPDATE_PRODUCT",
        payload:product
    }
}

export const delete_product = (id) => {
    return {
        type:"DELETE_PRODUCT",
        payload: {id}
    }
}

export const delete_purchases = (id) => {
    return {
        type: "DELETE_PURCHASES",
        payload:{id}
    }
}