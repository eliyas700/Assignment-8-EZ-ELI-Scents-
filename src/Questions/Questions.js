import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
<div className="accordion accordion-flush" id="accordionFlushExample">
    <h1 className='fw-bold text-center f-raja my-4'>Questions and Answers</h1>
    <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <h5 className='fw-bold'>How React Work?</h5>
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
            <p>
                React Have it's Own <b>Virtual DOM</b> and it Manipulate <b>Browser DOM</b>.Whenever a Components state changes,code is rendered by DOM and need to change the things in the UI ,It involves a lot of calculations.React do this work very efficiently and fast. React go through its Virtual DOM and Compare with the Real DOM (Browser DOM) then Create a list of Changes that need to be made in the UI then it does it all in a single process with in a Short time
            </p>
        </div>
        </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <h5 className='fw-bold'>Differences Between Props Vs State</h5>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
          Differences Between Props and State :
          <br />
          <b>Props:</b> <br />
          1.Props Are Immutable(Can't Change the value) <br />
          2.Props are Read only
          <br />
          3.It can be pass to the Child Components . <br />
          4.Props can be used with state and functional components.
          <br /> <br />
          
          <b>State:</b> <br />
          1.State are Mutable(Can Change the value). <br />
          2.The state is set and update by the Object. <br />
          3.State changes can be asynchronous. <br />
          4.State is both read and write able .

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <h5 className='fw-bold'>How Does Use State Work?</h5>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
          <p>The useState hook is a one-of-a-kind function that accepts the starting state as an input and returns a array of two entries.Like this: <b>const [state, setState] = useState(initialstate)</b> The first element is the initial state , while the second is a function for updating the state.
        </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Questions;