import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addChat } from "../actions/chatActions";
import ChatList from "../components/ChatList.jsx";
import { push } from 'connected-react-router';

const mapStateToProps = (store) => {
  return {
    chats: store.chatReducer.chats,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addChat,
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
