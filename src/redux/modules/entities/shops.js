import createReducer from '../../../utils/createReducer';

export const schema = {
    name: 'shop',
    id: 'id'
};

const reducer = createReducer(schema.name);

export default reducer;

export const getShop = (state, id) => {
    const shop = state.entities.shops[id];
    return shop;
};