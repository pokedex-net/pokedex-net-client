import * as actions from './actions';
import reducer from './reducer';
import sagas from './sagas';

/**
 * The initial state of the UI Redux store.
 * @type {Object}
 * @property {boolean} sidebarOpen=false Whether or not the sidebar is open.
 * @property {Object} metrics Object of layout metric variables.
 * @property {number} metrics.headerHeight=72 Height of header.
 * @property {number} metrics.windowWidth=0 Width of widnow.
 */
export const uiDefaultState = {
  sidebarOpen: false,
  metrics: {
    headerHeight: 72,
    windowWidth: 0,
  },
};


export default {
  actions,
  reducer,
  sagas,
  uiDefaultState,
};
