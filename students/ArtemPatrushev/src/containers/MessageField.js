import { connect } from 'react-redux';
import { sendMessage } from '../Actions/messageAction.js';
import { bindActionCreators } from 'redux';
import MessageField from '../components/MessageField/MessageField.jsx';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        messages: store.messageReducer.messages,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
