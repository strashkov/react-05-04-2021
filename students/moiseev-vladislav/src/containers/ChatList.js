import { bindActionCreators } from "redux";
import { addChat } from "../actions/chatActions";
import { connect } from "react-redux";
import ChatList from "../components/ChatList/ChatList";

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
