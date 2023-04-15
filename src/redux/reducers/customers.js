const initialState = {
    customers:[
      {id:"1", firstName:"John", lastName:"Doe", city:"New York"},
      {id:"2", firstName:"Jane", lastName:"Smith", city:"Los Angeles"},
      {id:"3", firstName:"Bob", lastName:"Johnson", city:"Chicago"}
    ]  
  }
  
  const customersReducer = (state = initialState, action) => {
    switch(action.type){
      case "UPDATE_CUSTOMER":{
        const customers = [...state.customers];
        const index = customers.findIndex((customer)=> customer.id === action.payload.id)
        if(index !== -1) {
          customers[index] = {...action.payload};
        }
        return {...state, customers};
      }

      case "DELETE_CUSTOMER": {
        const customers = [...state.customers].filter((customer)=> customer.id !== action.payload.id);
        return {...state, customers};
      }


    }

    
    return state;
  };
  
  export default customersReducer;