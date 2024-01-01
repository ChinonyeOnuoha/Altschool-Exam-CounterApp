//home.jsx
import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function useCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);

  const plus = () => {
    setCount((count || 0) + 1);
  };

  const minus = () => {
    setCount((count || 0) - 1);
  };

  const reset = () => {
    setCount(defaultValue);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return {
    count,
    plus,
    minus,
    reset,
    setValue,
  };
}

// Component that throws an error
const ErrorTrigger = () => {
  throw new Error('Intentional Error');
};


const Home = () => {

  const {
    count,
    plus,
    minus,
    reset,
    setValue,
  } = useCounter()
  const [input, setInput] = useState("")

  const handleInputChange = (value) => {
    setInput(value)
  }

  //use parseInt to convert the input into an integer (a whole number)

  const submitCount = () => {
    const numericValue = parseInt(input, 10);
    if (!isNaN(numericValue)) {
      setValue(numericValue);
    }
  };

   // State to control the rendering of the ErrorTrigger component
   const [showErrorTrigger, setShowErrorTrigger] = useState(false);

  return (
    <div className='counter_main'>

      <h1>Counter App</h1>

      <div className='counter_main_content'>

        <div className='counter_main_displayScreen'>
          <p className='counter_main_displayScreen_text'>{count || 0}</p>
        </div>
    
        <div className='counter_main_setValue'>
          <input
          type="number"
          placeholder='Enter any number'
          value={input}
          onChange={(e) => handleInputChange(e.target.value.trim())}/>

          <button className='counter_main_setValue_btn' onClick={submitCount}>
            Set Value
        </button>
        </div>

        <div className='button_container'>

          <div className='button_container_btn'>
            <button onClick={minus} style={{ color: '#FF5630', backgroundColor: '#FFBDAD' }} > <FontAwesomeIcon icon={faMinus}/>  </button>
            <p>Minus</p>
          </div>

          <div className='button_container_btn'>
            <button onClick={reset} style={{ color: '#1BAD6F', backgroundColor: '#ABF5D1' }}> <FontAwesomeIcon icon={faArrowsRotate} /> </button>
            <p>Refresh</p>
          </div>

          <div className='button_container_btn'>
            <button onClick={plus} style={{ color: '#FF8B00', backgroundColor: '#FFF0B3' }} > <FontAwesomeIcon icon={faPlus}/> </button>
            <p>Plus</p>
          </div>

        </div>
      </div>
        <div className='error_entry-points'>
          <Link to="/page-not-found" className='error_entry-points_links'>Go to Page Not Found</Link>
        </div>

        {/* Link to trigger the error */}
        <div className='error_entry-points'>
          <Link to="/" onClick={() => setShowErrorTrigger(true)}  className='error_entry-points_links'>
            Trigger Error
          </Link>
        </div>
        {/* Conditionally render the ErrorTrigger component */}
        {showErrorTrigger && <ErrorTrigger />}
      </div>
  )
}


export default Home;
