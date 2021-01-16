import { combineReducers } from 'redux';
import products from './products';
import shops from './shops';
import orders from './orders';
import comments from './comments';

const rootReducer = combineReducers({
    orders,
    products,
    comments,
    shops
});

export default rootReducer;
