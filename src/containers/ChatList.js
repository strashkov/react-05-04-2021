import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    addChat,
    deleteChat,
    markChatRead,
    loadChats
} from '../actions/chatActions';
import { push } from 'connected-react-router';
import ChatList from '../components/ChatList/ChatList';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        isLoading: store.chatReducer.isLoading,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadChats,
    markChatRead,
    addChat,
    deleteChat,
    push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
