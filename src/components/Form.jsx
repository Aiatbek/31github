import React from "react";

function Form(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label for="initial-investment">Initital Investment</label>
          <input type="number" id="initial-investment" />
        </div>
        <div>
          <label for="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label for="expected-return">Expected Return</label>
          <input type="number" id="expected-return" />
        </div>
        <div>
          <label for="duration">Duration</label>
          <input type="number" id="duration" />
        </div>
      </div>
    </section>
  );
}

export default Form;
