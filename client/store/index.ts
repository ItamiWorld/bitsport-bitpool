import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { challengeReducer } from './challenge';

export interface IState {
    auth: {
        currentUser: {
            email: string,
            password: string,
            username: string,
            firstname: string,
            lastname: string,
            money: { busd: number, usdt: number, usd: number, bitp: number, quest: number }
        }
    }
    challenge: {
        flag: boolean,
        model: object
    }
}

const reducer = combineReducers({
    auth: authReducer,
    challenge: challengeReducer
});

const store = configureStore({
    reducer,
    middleware: () => getDefaultMiddleware(),
})

export default store;