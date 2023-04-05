import React from 'react'
import ThankYou from '/illustration-thank-you.svg';

const Thanks = (props) => {

  const rating = props.rating;

  return (
    <>
      <img className='thank-you' src={ThankYou} alt="Thank You" />
      <span className='selection'>You selected {rating} out of 5</span>
      <h3 className='text-center'>Thank you!</h3>
      <p className='text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </>
  )
}

export default Thanks