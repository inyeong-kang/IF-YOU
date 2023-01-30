import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = ({ target: { value } }) => setName(value);

  const handleButtonClicked = (event) => {
    event.preventDefault();
    localStorage.setItem("name", name) //이름 localStorage에 저장
  };

  return (
    <div className="answer-form">
      <form>
        <input
          className="answer-input"
          type="text"
          name=""
          value={name}
          onChange={handleChange}
          autoFocus
        />
        <button 
          className="answer-button" 
          type="submit"
          onClick={handleButtonClicked}
          >
          이름 입력
        </button>
      </form>
    </div>
  );
}
export default NameForm;