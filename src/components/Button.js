import React from "react";

export default function Button(props) {
  return (
    <button className="btn btn-primary mx-1 my-1" onClick={props.event}>
      {props.text}
    </button>
  );
}
