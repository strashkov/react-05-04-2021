import { bindActionCreators } from "redux";
import { addChat } from "../actions/chatActions";
import { connect } from "react-redux";
import ChatList from "../components/ChatList/ChatList";
import { push } from "connected-react-router";

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
