import update from 'react-addons-update';
import {
   START_PROFILEDATA_LOADING,
   SUCCESS_PROFILEDATA_LOADING,
   ERROR_PROFILEDATA_LOADING,
} from '../actions/profileActions';

const initialStore = {

  profileData: {},
  isLoading: false,

  
};

export default function profileReducer(store = initialStore, action) {
  switch (action.type) {
    case START_PROFILEDATA_LOADING: {
        return update(store, {
           isLoading: { $set: true },
        });
    }
    case SUCCESS_PROFILEDATA_LOADING: {
        const profileData = {};
        action.payload.forEach(data => {
            const { firstName, lastName } = data;
            profileData = { firstName, lastName };
        });
        return update(store, {
          profileData: { $set: profileData },
            isLoading: { $set: false },
        });
    }
    case ERROR_PROFILEDATA_LOADING: {
        return update(store, {
            isLoading: { $set: false },
        });
    }
    default:
        return store;
}
}
