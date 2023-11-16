import React, { useState } from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggeStyle = () => {
        if(myStyle.color === "white"){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            });

            setbtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            });
            setbtnText("Enable Light Mode");
        }
    };

    return (
        <div className="container my-5" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
                >
                Text Manipulation tool
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                This is a text manipulation tool which is used for natural language processing tasks. 
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
                >
                Efficient and Fast
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                This is very light weight and fast performing text manipulation tool.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
                >
                Data preparation for large language models
                </button>
            </h2>
            <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                This tool can be used for data preparation tasks for large language models.
                </div>
            </div>
            </div>
        </div>
        <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggeStyle}>{btnText}</button>
        </div>
        </div>
    );
}
