import _ from 'lodash';
import { settingsDefaultState } from '../';

/**
 * The Settings reducer.
 * @param {Object} [state=settingsDefaultState] - Redux state
 * @param {Object} action - Redux action
 * @return {Object} Updated Redux state
 */
export default function settingsReducer(state = settingsDefaultState, action) {
  switch (_.get(action, 'type')) {
    case 'STORE_SETTINGS':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
