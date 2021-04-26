import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messageActions';
import Layout from '../components/Layout';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);