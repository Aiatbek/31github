import React, { useState } from "react";
import { calculateInvestmentResults as calc } from "../util/investment.js";

function Form(props) {
  const [obj, updateInputs] = useState({
    initialInvest: "",
    annualInvest: "",
    expectedRtrn: "",
    duration: "",
  });

  const inputHandler = (event, key) => {
    let newObj = { ...obj };
    newObj[key] = event.target.value;
    updateInputs(newObj);
    props.extractionHandler(calc(newObj));
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label for="initial-investment">Initital Investment</label>
          <input
            onChange={(event) => inputHandler(event, "initialInvest")}
            type="number"
            id="initial-investment"
          />
        </div>
        <div>
          <label for="annual-investment">Annual Investment</label>
          <input
            onChange={(event) => inputHandler(event, "annualInvest")}
            type="number"
            id="annual-investment"
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label for="expected-return">Expected Return</label>
          <input
            onChange={(event) => inputHandler(event, "expectedRtrn")}
            type="number"
            id="expected-return"
          />
        </div>
        <div>
          <label for="duration">Duration</label>
          <input
            onChange={(event) => inputHandler(event, "duration")}
            type="number"
            id="duration"
          />
        </div>
      </div>
    </section>
  );
}

export default Form;
