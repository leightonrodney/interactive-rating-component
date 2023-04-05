import { useState } from 'react';
import './App.css';
import Rating from './components/Rating';
import Thanks from './components/Thanks';


function App() {

  const [rating, setRating] = useState('');
  const [active, setActive] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const btnSelect = (e) => {
    setRating(e.target.value);
  }

  const submitRating = (e) => {
    e.preventDefault();
    setSubmitStatus(true);
  }

  return (
    <>
      <div className='container mx-auto flex flex-col h-screen'>

        <div className='ratings-card'>
          {
            submitStatus === false ? <Rating rating={rating} setRating={setRating} btnSelect={btnSelect} submitRating={submitRating} /> : <Thanks rating={rating} />
          }
        </div>

        <div className='attribution mx-auto py-8 text-white text-sm text-base'>
          Challenge by <a className='underline' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a className='underline' href="http://leightonrodney.com">Leighton Rodney</a>.
        </div>

      </div>
    </>
  )
}

export default App
