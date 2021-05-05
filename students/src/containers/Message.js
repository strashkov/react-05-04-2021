import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMessage } from '../actions/messageActions.js';
import Message from '../components/Message/index.jsx';

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteMessage
}, dispatch);

export default connect(null, mapDispatchToProps)(Message);
