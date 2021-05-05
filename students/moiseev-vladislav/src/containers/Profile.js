import { connect } from "react-redux";
import Profile from "../components/Profile/Profile";

const mapStateToProps = ({ profileReducer }) => ({
  firstName: profileReducer.firstName,
  secondName: profileReducer.secondName,
  email: profileReducer.email,
  description: profileReducer.description,
});

export default connect(mapStateToProps)(Profile);
