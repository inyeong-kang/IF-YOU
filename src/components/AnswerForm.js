import React, { useState } from "react";
import axios from '../api/axios';

import "../styles/answerform.css";

const BASE_URL = 'http://34.80.243.76:6006/';
const PREDICT_URL = '/predict';

function AnswerForm() {
  const [answer, setAnswer] = useState("");

  const handleChange = ({ target: { value } }) => setAnswer(value);

  const handleButtonClicked = async (event) => {
    event.preventDefault();
    fetch('http://34.80.243.76:6006/predict', {
      method : "POST",
      headers : {
          "Content-Type":"application/json; charset=utf-8"
      },
      body: JSON.stringify(answer)
    })
    .then(res=>{
        console.log(res)
        return res.json();
    })
    .then(res=> {
        console.log(res);
    });
  };

  return (
    <div className="answer-form">
      <form>
        <input
          className="answer-input"
          type="answer"
          name="answer"
          value={answer}
          onChange={handleChange}
          autoFocus
        />
        <button 
          className="answer-button" 
          type="submit"
          onClick={handleButtonClicked}
          >
          문장 입력
        </button>
      </form>
    </div>
  );
}
export default AnswerForm;