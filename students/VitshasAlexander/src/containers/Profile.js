import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadProfile } from "../actions/profileActions";
import Profile from "../components/Profile";

const mapStateToProps = (store) => {
  return {
    user: store.profileReducer.user,
    isLoading: store.profileReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadProfile,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
