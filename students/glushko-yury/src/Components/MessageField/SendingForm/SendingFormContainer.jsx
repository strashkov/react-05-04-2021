import { connect } from 'react-redux';
import {
  updateInputValue,
  updateMessagesData,
} from '../../../redux/chats-reducer';
import SendingForm from './SendingForm';

const mapStateToProps = state => ({
  inputValue: state.messenger.inputValue,
});

export default connect(mapStateToProps, {
  updateInputValue,
  updateMessagesData,
})(SendingForm);
