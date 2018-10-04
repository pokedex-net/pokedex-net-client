/**
 * This function sends an action to be intercepted by {@link watchHideModal}.
 * @return {Object} Redux action
 */
export const hideModal = () => ({ type: 'HIDE_MODAL' });

/**
 * This function sends an action to be intercepted by {@link watchShowModal}.
 * @param {string} data - A string with the value to update in the store.
 * @return {Object} Redux action
 */
export const showModal = data => ({ type: 'SHOW_MODAL', data });

/**
 * This function sends an action to store the new data to {@link uiReducer}.
 * @param {Object} data - An object with the key/value pair to store in the store.
 * @return {Object} Redux action
 */
export const storeMetric = data => ({ type: 'STORE_METRIC', data });

/**
 * This function sends an action to store the new data to {@link uiReducer}.
 * @param {Object} data - An object with the key/value pair to store in the store.
 * @return {Object} Redux action
 */
export const storeUi = data => ({ type: 'STORE_UI', data });

/**
 * This function sends an action to be intercepted by {@link watchUpdateMetric}.
 * @param {Object} data - An object with the key/value pair to update in the store.
 * @return {Object} Redux action
 */
export const updateMetric = data => ({ type: 'UPDATE_METRIC', data });

/**
 * This function sends an action to be intercepted by {@link watchUpdateUi}.
 * @param {Object} data - An object with the key/value pair to update in the store.
 * @return {Object} Redux action
 */
export const updateUi = data => ({ type: 'UPDATE_UI', data });
