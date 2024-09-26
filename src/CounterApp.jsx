import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( { value } ) => {
  if ( !value && value !== 0 )
  throw new Error( 'No existe valor');

  const [ counter, setCounter ] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1 )
    // setCounter( (c) => c + 1 )
  }
  const handleSubstractAdd = () => {
    setCounter(counter - 1 )
    // setCounter( (c) => c - 1 )
  }
  const handleReset = () => {
    setCounter( value )
    // setCounter( (c) => c - 1 )
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>
      <button aria-label="btn-plus" onClick={ handleAdd }>+1</button>
      <button aria-label="btn-minus" onClick={ handleSubstractAdd }>-1</button>
      <button aria-label="btn-reset" onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}