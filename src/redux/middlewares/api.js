export const IS_FETCH_DATA_ACTION = 'IS_FETCH_DATA_ACTION';
export default store => next => action => {
    const callAPI = action[IS_FETCH_DATA_ACTION];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { endpoint, schema, types } = callAPI;
    if (typeof endpoint !== 'string') {
        throw new Error('endpoint is not a string');
    }
    if (!schema) {
        throw new Error('schema is invalid');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('types is not a size 3 array');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('action type is not a string');
    }
    
    const [requestType, successType, failureType] = types;

    next({type: requestType});

    return IS_FETCH_DATA_ACTION(endpoint, schema).then(
        response > next({
            type: successType,
            response
        }),
        error => next({
            type: failureType,
            error: error.message || 'fetch data failure'
        })
    );
}