import React from 'react';
import Star from '/icon-star.svg';

const Rating = (props) => {

  const rating = props.rating;
  const submitRating = props.submitRating;
  const btnSelect = props.btnSelect;

  return (
    <>
        <img className='star-icon' src={Star} alt="Star icon" />
        <h3>How did we do?</h3>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <form onSubmit={submitRating}>
        <div className='form-group'>
            <button type='button' className={rating == 1 ? 'active' : ''} value='1' onClick={btnSelect}>1</button>
            <button type='button' className={rating == 2 ? 'active' : ''} value='2' onClick={btnSelect}>2</button>
            <button type='button' className={rating == 3 ? 'active' : ''} value='3' onClick={btnSelect}>3</button>
            <button type='button' className={rating == 4 ? 'active' : ''} value='4' onClick={btnSelect}>4</button>
            <button type='button' className={rating == 5 ? 'active' : ''} value='5' onClick={btnSelect}>5</button>
        </div>

        <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Rating