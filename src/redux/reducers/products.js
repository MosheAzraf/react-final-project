const initialState = {
  products:[
    {id:"1", name:"watch", price:10.99, quantity:5},
    {id:"2", name:"ipad", price: 699, quantity:10},
    {id:"3", name:"computer", price:1999, quantity:4}
  ]  
}

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;