import Button from './Button/Button';
import Input from './Input/Inputs';
import PropTypes from 'prop-types';

const SendingForm = ({
  inputValue,
  updateInputValue,
  updateMessagesData,
  inputFocus,
}) => {
  const submitHandler = e => {
    e.preventDefault();
    updateMessagesData('me');
  };

  return (
    <form action='#' onSubmit={submitHandler}>
      <Input
        inputValue={inputValue}
        updateInputValue={updateInputValue}
        inputFocus={inputFocus}
      />
      <Button>send msg</Button>
    </form>
  );
};

SendingForm.propTypes = {
  inputValue: PropTypes.string,
};

export default SendingForm;
