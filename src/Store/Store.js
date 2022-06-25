import { combineReducers, createStore } from "redux";
// import { applyMiddleware,compose } from "redux";
import { Reducers } from "../Reducer/Reducers";
// import thunk from "redux-thunk";

const AllReducers = combineReducers({
    allproduct:Reducers,
})


export const store =createStore(AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


//using redux - thunk 
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store =createStore(AllReducers,
//      composeEnhancers(applyMiddleware(thunk))
//     )

