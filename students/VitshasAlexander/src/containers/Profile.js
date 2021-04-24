import { connect } from "react-redux";

import Profile from "../components/Profile";

const mapStateToProps = (store) => {
  return {
    user: store.profileReducer.user,
  };
};

export default connect(mapStateToProps)(Profile);
