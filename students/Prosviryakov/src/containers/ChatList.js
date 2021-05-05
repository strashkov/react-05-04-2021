import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { addChat, markChatRead, loadChats } from '../actions/chatActions.js';
import ChatList from '../components/ChatList/index.jsx';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        isLoading: store.chatReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadChats,
    markChatRead,
    addChat,
    push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);