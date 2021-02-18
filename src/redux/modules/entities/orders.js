import createReducer from '../../../utils/createReducer';

export const schema = {
    name: 'orders',
    id: 'id'
};

export const orderStates = {
    EXPIRED_TYPE: 1,
    UNPAID_TYPE: 2,
    PAID_TYPE: 3,
    RETURNED_TYPE: 4
};

const reducer = createReducer(schema.name);

export default reducer;

export const getOrderById = (state, id) => {
    return state.entities.orders[id];
};