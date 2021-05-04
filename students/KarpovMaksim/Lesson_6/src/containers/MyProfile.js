import { connect } from 'react-redux';
import MyProfile from '../components/MyProfile';

const mapStateToProps = (store) => {
    return store.profileReducer;
};

export default connect(mapStateToProps)(MyProfile);
