import { useReducer } from 'react';

export default function useMiddleware(reducer, init, middlewares = []) {

    const [state, dispach] = useReducer(reducer, init);

    const middlewareDispach = action => {
        middlewares.map(m => m(state, action));
        dispach(action);
    }

    return [state, middlewareDispach];
}