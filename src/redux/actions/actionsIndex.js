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

export const delete_purchases_byProductId = (id) => {
    return {
        type: "DELETE_PURCHASES_BY_PRODUCTID",
        payload:{id}
    }
}


export const update_customer = (customer) => {
    return {
        type:"UPDATE_CUSTOMER",
        payload: customer
    }
}
