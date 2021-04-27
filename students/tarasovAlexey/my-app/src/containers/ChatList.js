import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { addChat } from '../actions/chatActions';
import ChatList from '../components/ChatList';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    addChat,
    push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);