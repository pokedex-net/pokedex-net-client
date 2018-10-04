import _ from 'lodash';
import { uiDefaultState } from '../';

/**
 * The UI reducer.
 * @param {Object} [state=uiDefaultState] - Redux state
 * @param {Object} action - Redux action
 * @return {Object} Updated Redux state
 */
export default function uiReducer(state = uiDefaultState, action) {
  switch (_.get(action, 'type')) {
    case 'STORE_METRIC':
      return {
        ...state,
        metrics: {
          ...state.metrics,
          ...action.data,
        },
      };
    case 'STORE_UI':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
