import { get } from '../../utils/requests';

export const FETCH_DATA = 'FETCH_DATA_ACTION';

export default store => next => action => {
    const callAPI = action[FETCH_DATA];
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

    const enhanceAction = data => {
        const enhancedAction = {...action, ...data};
        delete enhanceAction[FETCH_DATA];
        return enhancedAction;
    }
    
    const [requestType, successType, failureType] = types;

    next(enhanceAction({type: requestType}));

    return fetchData(endpoint, schema).then(
        response > next(enhanceAction({
            type: successType,
            response
        })),
        error => next(enhanceAction({
            type: failureType,
            error: error.message || 'fetch data failure'
        }))
    );
};

const fetchData = (endpoint, schema) => {
    return get(endpoint).then(data => {
        return normalizeData(data, schema);
    });
};

const normalizeData = (data, schema) => {
    const {id, name} = schema;
    let kvObj = {};
    let ids = [];
    if (Array.isArray(data)) {
        data.forEach(item => {
            kvObj[item[id]] = item;
            ids.push(item[id]);
        });
    } else {
        kvObj[data[id]] = data;
        ids.push(data[id]);
    }
    return {
        [name]: kvObj,
        ids
    };
};