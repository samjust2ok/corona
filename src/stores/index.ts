
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reports/reducers';
import saga from './reports/saga';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()

const configureStore = ()=>{
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
        )
        );
        
        sagaMiddleware.run(saga)
        
     return store;
}

const store = configureStore();
console.log(store.getState())

export default store;