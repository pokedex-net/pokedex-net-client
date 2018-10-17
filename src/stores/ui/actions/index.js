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
