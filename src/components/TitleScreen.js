import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">두근두근 나의 아바타 공략기!</div>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Start</span>
          </li>
          <li>
            <span onClick={props.toggleLoadMenu}>Help</span>
          </li>
          <li>
            <span>
              <a href="https://github.com/nashkenazy/generic-vn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </span>
          </li>
          <li />
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
