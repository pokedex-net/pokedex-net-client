/**
 * This function sends an action to store the new data to {@link settingsReducer}.
 * @param {Object} data - An object with the key/value pair to store in the store.
 * @return {Object} Redux action
 */
export const storeSettings = data => ({ type: 'STORE_SETTINGS', data });

/**
 * This function sends an action to be intercepted by {@link watchUpdateSettings}.
 * @param {Object} data - An object with the key/value pair to update in the store.
 * @return {Object} Redux action
 */
export const updateSettings = data => ({ type: 'UPDATE_SETTINGS', data });
