import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import { addChat, markChatRead, loadChats } from '../actions/chatActions';
import ChatList from '../components/ChatList';

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