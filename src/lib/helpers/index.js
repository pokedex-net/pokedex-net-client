/**
 * A helper to test Redux connected components by passing a mocked Redux store.
 * @param {Object} mockState - A mock Redux state.
 * @return {Object} A mocked Redux store.
 */
export const mockStore = mockState => ({
  dispatch: () => {},
  getState: () => mockState,
  subscribe: () => {},
});

export default { mockStore };
