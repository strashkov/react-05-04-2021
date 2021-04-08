import Button from './Button/Button';
import Input from './Input/Inputs';

const SendingForm = ({
  inputValue,
  updateInputValue,
  updateMessagesData,
  inputFocus,
}) => {
  const submitHandler = e => {
    e.preventDefault();
    updateMessagesData();
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

export default SendingForm;
