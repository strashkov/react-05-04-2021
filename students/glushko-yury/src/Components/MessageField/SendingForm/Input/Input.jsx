import TextField from '@material-ui/core/TextField';

const Input = ({ inputValue, updateInputValue }) => {
  const updateValue = e => {
    const text = e.target.value;
    updateInputValue(text);
  };

  return (
    <TextField
      style={{ width: '70%' }}
      variant='outlined'
      label='add message'
      type='text'
      autoFocus
      value={inputValue}
      onChange={updateValue}
    />
  );
};

export default Input;
