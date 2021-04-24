import { connect } from "react-redux";

import Profile from "../components/Profile.jsx";

const mapStateToProps = (store) => {
  return {
    user: store.profileReducer.user,
  };
};

export default connect(mapStateToProps)(Profile);
