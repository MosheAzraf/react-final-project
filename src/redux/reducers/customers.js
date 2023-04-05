const initialState = {
    customers:[
      {id:"1", firstName:"John", lastName:"Doe", city:"New York"},
      {id:"2", firstName:"Jane", lastName:"Smith", city:"Los Angeles"},
      {id:"3", firstName:"Bob", lastName:"Johnson", city:"Chicago"}
    ]  
  }
  
  const customersReducer = (state = initialState, action) => {
    return state
  };
  
  export default customersReducer;