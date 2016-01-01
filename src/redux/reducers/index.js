import {helloWorld} from './helloWorld';
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
  helloWorld,
  routing: routeReducer
});
