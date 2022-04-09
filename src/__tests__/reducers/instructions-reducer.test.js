import instructionsReducer from '../../reducers/instructions-reducer';

describe('instructionsReducer', () => {

  const defaultState = {
    isLoading: false,
    instructions: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(instructionsReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        instructions: [],
        error: null
      }
    );
  });
});
