import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { sendMessage } from "../actions/messageActions";
import MessageFields from "../components/MessageFields.jsx";

const mapStateToProps = (store) => {
  return {
    messages: store.chatReducer.messages,
    chats: store.chatReducer.chats,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MessageFields);
