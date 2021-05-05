import { connect } from "react-redux";
import Profile from "../components/Profile.jsx";
import { loadProfileData } from '../actions/profileActions';
import { bindActionCreators } from "redux";


const mapStateToProps = (store) => {
  return {
    profileData: store.profileReducer.profileData,
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadProfileData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

