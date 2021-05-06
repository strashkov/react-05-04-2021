import { 
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_ERROR
} from "../actions/profileActions";

const initialStore = {
  profile: {}
};

export default function profileReducer(store = initialStore, action) {
  switch (action.type) {
      case LOAD_PROFILE_REQUEST: {
        return {
            ...store,
            isLoading: true
        }
    }
    case LOAD_PROFILE_ERROR: {
        return {
            ...store,
            isLoading: false
        }
    }
    case LOAD_PROFILE_SUCCESS: {
        const { profile } = action.payload.entities;
        return {
            ...store,
           profile,
            isLoading: false
        }
    }
      default:
          return store;
  }
}

