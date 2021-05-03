import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { loadProfile } from "../actions/profileActions";
import Profile from '../components/Profile/Profile';

const mapStateToProps = (store) => {
    return {
        profile: store.profileReducer.profile,
        isLoading: store.profileReducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadProfile
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
