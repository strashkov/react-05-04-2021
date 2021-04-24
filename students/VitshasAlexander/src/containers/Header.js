import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToProps = (store) => {
  return {
    user: store.profileReducer.user,
  };
};

export default connect(mapStateToProps)(Header);
