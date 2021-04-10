const Input = ({ inputValue, updateInputValue, inputFocus }) => {
  const updateValue = e => {
    const text = e.target.value;
    updateInputValue(text);
  };

  return (
    <input
      type='text'
      value={inputValue}
      onChange={updateValue}
      ref={inputFocus}
    />
  );
};

export default Input;
