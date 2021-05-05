import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messageActions.js';
import MessageField from '../components/MessageField/index.jsx';

const mapStateToProps = (store) => {
    return {
        messages: store.messageReducer.messages,
        isLoading: store.messageReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage,
    loadMessages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);