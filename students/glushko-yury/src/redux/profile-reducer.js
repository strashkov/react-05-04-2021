import { profileAPI } from '../api/api';

const LOAD_PROFILE = 'LOAD_PROFILE';

const initialState = {
  // userName: 'Yury',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        userName: action.profile,
      };

    default:
      return state;
  }
};

export const loadProfile = profile => ({
  type: LOAD_PROFILE,
  profile,
});

export const loadProfileAPI = () => {
  return dispatch => {
    profileAPI.loadProfile().then(data => {
      const { userName } = data;
      if (userName) {
        dispatch(loadProfile(userName));
      }
    });
  };
};

export default profileReducer;
