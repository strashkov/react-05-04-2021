import { connect } from 'react-redux';
import { loadProfile } from '../actions/profileActions';
import { bindActionCreators } from 'redux';
import MyProfile from '../components/MyProfile';



const mapStateToProps = (store) => ({
    profile: store.profileReducer.profile,
    isLoading: store.messageReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
    loadProfile
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
