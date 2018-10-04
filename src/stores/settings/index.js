import * as actions from './actions';
import config from '../../../config';
import reducer from './reducer';
import sagas from './sagas';

/**
 * The initial state of the Settings Redux store.
 * @type {Object}
 * @property {string} lang=en The page language.
 * @property {string} theme=dark The color theme used.
 */
export const settingsDefaultState = {
  lang: config.defaultLang,
  theme: 'dark',
};

export default {
  actions,
  reducer,
  sagas,
  settingsDefaultState,
};
