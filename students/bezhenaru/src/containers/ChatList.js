import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { addChat,  markChatRead, loadChats } from '../actions/chatActions';
import ChatList from '../components/ChatList/ChatList';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        isLoading: store.chatReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    addChat,
    push,
    loadChats,
    markChatRead,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
