import TextField from '@material-ui/core/TextField';

const Input = ({ inputValue, updateInputValue }) => {
  const updateValue = e => {
    const text = e.target.value;
    updateInputValue(text);
  };

  return (
    <TextField
      style={{ width: '70%' }}
      autoFocus
      variant='outlined'
      label='add message'
      type='text'
      value={inputValue}
      onChange={updateValue}
    />
  );
};

export default Input;
