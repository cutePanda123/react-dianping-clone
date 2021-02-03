import { combineReducers } from 'redux';
import products from './products';
import shops from './shops';
import orders from './orders';
import comments from './comments';
import keywords from './keywords';

const rootReducer = combineReducers({
    orders,
    products,
    comments,
    shops,
    keywords
});

export default rootReducer;
