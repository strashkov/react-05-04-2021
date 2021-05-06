import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    loadMessages,
    sendMessage,
    deleteMessage
} from '../actions/messageActions';
import { push } from 'connected-react-router';
import MessageField from '../components/MessageField/MessageField';

const mapStateToProps = (store) => {
    return store.messageReducer;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadMessages,
    sendMessage,
    deleteMessage,
    push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);