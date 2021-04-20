import { connect } from "react-redux";

import Header from "../components/Header.jsx";

const mapStateToProps = (store) => {
  return {
    user: store.chatReducer.user,
  };
};

export default connect(mapStateToProps)(Header);
