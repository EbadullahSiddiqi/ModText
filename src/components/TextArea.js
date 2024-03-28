import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState(""); // sets the value of "text". "setText" is a variable that will change the value of "text"

  function upperClick() {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  }

  function lowerClick() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function titleClick() {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (word !== "") {
          return word[0].toUpperCase() + word.slice(1); // slice(1) means that the word is cut and a new word is formed that starts from the character at "1" index of the prev word
        }
      })
      .join(" ");

    setText(newText);
  }

  function clearText() {
    let newText = "";
    setText(newText);
  }

  function copyText() {
    document.getElementById("textbox").select(); // selects the text in the textbox
    navigator.clipboard.writeText(text); // copies the text in the textbox
  }

  function handleOnchange(e /*event*/) {
    setText(e.target.value); // changes the value of "text" whenever user types
  }

  const themeStyle = {
    color: props.mode === "dark" ? "white" : "black",
    // backgroundColor: props.mode==="dark"? 'dark': 'white'
  };

  const btnStyle = {
    backgroundColor: props.mode === "dark" ? "white" : "#051424",
    color: props.mode === "dark" ? "#051424" : "white",
    border: "none",
  };

  return (
    <>
      <div className={`container`} style={themeStyle}>
        <h1 className="mb-3">{props.heading}</h1>
        <textarea
          placeholder="Enter text here"
          className="form-control"
          value={text}
          rows="8"
          onChange={handleOnchange}
          id="textbox"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "light" ? "white" : "#4c4b4b",
          }}
        ></textarea>

        <button
          disabled={text.length === 0}
          className="my-3 btn btn-primary mx-1"
          onClick={upperClick}
          style={btnStyle}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="my-3 btn btn-primary mx-1"
          onClick={lowerClick}
          style={btnStyle}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="my-3 btn btn-primary mx-1"
          onClick={titleClick}
          style={btnStyle}
        >
          Convert to Title Case
        </button>

        <button
          disabled={text.length === 0}
          className="my-3 btn btn-primary mx-1"
          onClick={copyText}
          style={btnStyle}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="my-3 btn btn-primary mx-1"
          onClick={clearText}
          style={btnStyle}
        >
          Clear Text
        </button>
      </div>

      <div className="container" style={themeStyle}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((e) => e !== "").length} words and{" "}
          {
            text
              .split(" ")
              .filter((e) => e !== "")
              .join("").length
          }{" "}
          letters
        </p>
        <p>
          {0.24 * text.split(" ").filter((e) => e !== "").length} Seconds will
          be taken to read this
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </>
  );
}
