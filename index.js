const redux = require('redux');
const createStore = redux.createStore  
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Buy cake ne kkk'
  }
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Buy ice cream ne kkk'
  }
}

const cakeInitialState = {
  numOfCakes: 10,
}
const iceCreamInitialState = {
  numOfIceCreams: 22,
}

const cakeReducer = (state = cakeInitialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

const store = createStore(rootReducer)
console.log('Initial state:', store.getState())

const unsubscribe = store.subscribe(() => console.log('Update state: ', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()