import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteMessage } from "../actions/messageActions";
import Message from "../components/Message";

const mapStateToProps = (store) => {
  return {
    chats: store.chatReducer.chats,
    messages: store.messageReducer.messages,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Message);
