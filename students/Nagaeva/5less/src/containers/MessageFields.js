import {
    bindActionCreators
} from "redux";
import {
    connect
} from "react-redux";
import {
    sendMessage
} from "../actions/messageActions";
import MessageFields from "../components/MessageFields.jsx";

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        messages: store.messageReducer.messages,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
            sendMessage,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MessageFields);