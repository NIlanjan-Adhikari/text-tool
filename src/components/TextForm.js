import React, { useState } from "react";
import Button from "./Button";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here:");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked!");
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked!");
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change!");
    setText(event.target.value);
  };

  const handleClearTextClick = () => {
    setText("");
    props.showAlert("Text area cleared", "success");
  };

  const handleCopyTextClick = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
    <div className="my-5">
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "#0d062c" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3 my-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              color: props.mode === "light" ? "#0d062c" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
          ></textarea>
        </div>
        <Button event={handleUpClick} text={"Convert to Uppercase"} />
        <Button event={handleLowClick} text={"Convert to Lowercase"} />
        <Button event={handleClearTextClick} text={"Clear Text"} />
        <Button event={handleCopyTextClick} text={"Copy Text"} />
        <Button event={handleExtraSpacesClick} text={"Clear Extra Spaces"} />
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#0d062c" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !==0;}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in the textbox to preview"}
        </p>
      </div>
      </div>
    </>
  );
}
