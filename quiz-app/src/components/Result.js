import React from 'react';
import PropTypes from 'prop-types'
function Result(props) {

  return (
    
      <div>
        Thanks,Your Score is  <strong>{props.quizResult}</strong>
      </div>
      );

}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;