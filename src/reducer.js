function reducer (state, action) {
  const {type, payload: {name, value}} = action;
  switch (type) {
    case 'checkbox':
      return ({
        ...state,
        [name]: getChecked(value, state[name])
      });
    case 'radio': 
      return ({
        ...state,
        [name]: value
      });
    case 'text': 
      return ({
        ...state,
        [name]: getInput(value, state[name])
      })
    default: 
      throw new Error(`Wrong action type: ${action.type}`);
  }
}
// Using array for cases when section  
// will consist more of one checkbox

function getChecked(current, checked) {
  const isCurrentChecked = checked.includes(current);
  const idx = checked.findIndex(v => v === current);

  return isCurrentChecked ? 
    [...checked.slice(0, idx), ...checked.slice(idx + 1)] :
    [...checked, current];
} 

function getInput({name, value}, picked) {
  return ({
    ...picked, 
    [name]: value
  })
}

export default reducer;