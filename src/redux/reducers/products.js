const initialState = {
  products:[
    {id:"1", name:"watch", price:10.99, quantity:5},
    {id:"2", name:"ipad", price: 699, quantity:10},
    {id:"3", name:"computer", price:1999, quantity:4},
    {id:"4", name:"laptop", price:200, quantity:5}
  ]  
}

const productsReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "UPDATE_PRODUCT": {
      const products = [...state.products];
      const index = products.findIndex((product)=> product.id === action.payload.id);
      if (index !== -1) {
        products[index] = { ...action.payload };
      }
      return {...state, products}};
    
    case "DELETE_PRODUCT":{
      const products = state.products.filter((product)=> product.id !== action.payload.id);
      return {...state, products}
    }

    
    
    default:
      return state;
  }

};

export default productsReducer;