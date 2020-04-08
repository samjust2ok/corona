
import { createStore, compose, applyMiddleware } from 'redux';
import persistedReducer from '../reducers';
import saga from '../saga';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware()

const configureStore = ()=>{
    const store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(sagaMiddleware,logger),
        )
        );
        
        sagaMiddleware.run(saga)
        if(module.hot){
            module.hot.accept('../reducers',()=>{
                store.replaceReducer(persistedReducer)
            })
        }
        const persistedStore = persistStore(store)
     return { store, persistedStore};
}

const {store, persistedStore} = configureStore();

export {store as default, persistedStore}