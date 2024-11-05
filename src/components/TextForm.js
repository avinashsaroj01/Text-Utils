import React, { useState } from "react";

export default function TextForm(props) {
  const handleCick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper-Case","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="container" style={ {color:props.mode==='dark'? 'white' :'black'}}>
          <h1>{props.heading} </h1>
          <form>
            <div className="form-group" >
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea
                className="form-control" 
                value={text}
                onChange={handleOnChange}
                style={{backgroundColor: props.mode==='dark'? '#9ca3af' :'white', color: props.mode==='dark'? 'white' :'black'}} 
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={handleCick}
          >
            Convert to Upper-Case
          </button>
        </div>
      </div>

      <div className="container" style={ {color:props.mode==='dark'? 'white' :'black'}}>
        <h1> Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} min read </p>
        <h2> Preview</h2>
        <p>
          {" "}
          {text.length > 0 ? text : "Write something above to preview it here!"}
        </p>
      </div>
    </>
  );
}
