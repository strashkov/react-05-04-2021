import { connect } from 'react-redux';
import { addChat, markChatRead } from '../Actions/chatActions.js';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import ChatList from '../components/ChatList/ChatList.jsx';

const mapStateToProps = (store) => ({
    chats: store.chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push, markChatRead }, dispatch); // это то же самое, что и запись ниже, только короче

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddNewChat: (title) => {
//             dispatch(addChat(title))
//         }
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
