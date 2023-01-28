import React, { useState } from "react";
import axios from '../api/axios';

import "../styles/answerform.css";

const PREDICT_URL = '/predict';

function AnswerForm() {
  const [answer, setAnswer] = useState("");

  const handleChange = ({ target: { value } }) => setAnswer(value);

  const handleButtonClicked = async (event) => {
    event.preventDefault();
    try {
      const id = 'test1';
      const idx = 0;
			const response = axios.post(
				PREDICT_URL,
				JSON.stringify({ id, answer, idx }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);
      console.log(response);
		} catch (err) {
      console.log(err);
		}
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