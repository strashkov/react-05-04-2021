import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    loadChats,
    addChat,
    deleteChat,
    markChatRead
} from '../actions/chatActions';
import { push } from 'connected-react-router';
import ChatList from '../components/ChatList/ChatList';

const mapStateToProps = (store) => {
    return store.chatReducer;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadChats,
    addChat,
    deleteChat,
    markChatRead,
    push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
