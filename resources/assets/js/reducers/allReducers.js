import { combineReducers } from 'redux';
import { appStateReducer } from './appStateReducer';

export default combineReducers({ globalState: appStateReducer });
