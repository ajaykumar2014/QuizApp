import React from 'react';

function NextButton(props) {

  return (
    <div class="button-box">
      <button
        name="Next"
        id='nextButton'
        value='Next'
        className='button'
        disabled={props.answer === -1}
        onClick={props.onAnswerSubmitted}>Next</button>
    </div>
  );

}



export default NextButton;