const initialState = {
    purchases:[
      {
        id:"1", customerId:"1", productId:"1", date:"2023-03-30" 
      },
      {
        id:"2", customerId:"2", productId:"1", date:"2023-03-29" 
      },
      {
        id:"3", customerId:"3", productId:"3", date:"2023-03-28" 
      },
            
    ]  
  }
  
  const purchasesReducer = (state = initialState, action) => {
    return state;
  };
  
  export default purchasesReducer;