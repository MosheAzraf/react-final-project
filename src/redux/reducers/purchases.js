const initialState = {
    purchases:[
      {
        id:"1", customerId:"1", productId:"1",quantity:4 , date:"2023-03-30" 
      },
      {
        id:"2", customerId:"2", productId:"1", quantity:1, date:"2023-03-29" 
      },
      {
        id:"3", customerId:"3", productId:"3", quantity:3, date:"2023-03-28" 
      },
      {
        id:"4", customerId:"1", productId:"2", quantity:3, date:"2023-03-31"
      }
            
    ]  
  }
  
  const purchasesReducer = (state = initialState, action) => {
    switch(action.type) {
      case "DELETE_PURCHASES_BY_PRODUCTID":{
        const purchases = state.purchases.filter((purchase)=> purchase.productId !== action.payload.id);
        return {...state, purchases}
      }

      case "DELETE_PURCHASES_BY_CUSTOMERID": {
        const purchases = state.purchases.filter((purchase)=> purchase.customerId !== action.payload.id);
        return {...state, purchases}
      }

      case "ADD_PURCHASE": {
        const newPurchase = action.payload;
        const updatedPurchases = [...state.purchases, newPurchase]
        return {...state, purchases: updatedPurchases}
      }
    }
    

    return state;
  };
  
  export default purchasesReducer;