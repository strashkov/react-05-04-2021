import { connect } from 'react-redux';
import EmptyChat from './EmptyChat';

const mapStateToProps = state => ({
  chats: state.messenger.chats,
});

export default connect(mapStateToProps)(EmptyChat);
