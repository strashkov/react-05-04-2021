import PropTypes from 'prop-types';
import style from './SendingForm.module.scss';
import Button from './Button/Button';
import Input from './Input/Input';

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
    <form action='#' className={style.sendingForm} onSubmit={submitHandler}>
      <Input
        autoFocus
        inputValue={inputValue}
        updateInputValue={updateInputValue}
        inputFocus={inputFocus}
      />
      <Button inputValue={inputValue}>send msg</Button>
    </form>
  );
};

SendingForm.propTypes = {
  inputValue: PropTypes.string,
};

export default SendingForm;
