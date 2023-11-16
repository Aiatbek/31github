import React, { useState } from "react";
import { calculateInvestmentResults as calc } from "../util/investment.js";

function Form(props) {
  const [obj, updateInputs] = useState({
    initialInvest: "",
    annualInvest: "",
    expectedRtrn: "",
    duration: "",
  });

  const inputHandler = (newVal, key) => {
    let newObj = { ...obj };
    newObj[key] = +newVal;
    updateInputs(newObj);
    props.extractionHandler(calc(newObj));
    // updateInputs(lastUpdatedObj => {
    //   return ({
    //     ...lastUpdatedObj,
    //     [key]: event.target.value
    //   })
    // })
    // lastUpdatedObj is like event  which is passed automatically
    // to the fn as an argument by js but in this case by react

    //***************************** */
    //     const key = "dynamicKey";
    //     const obj = {
    //     [key]: "some value"
    // Output: { dynamicKey: "some value" }
    /***************************** */
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label for="initial-investment">Initital Investment</label>
          <input
            onChange={(event) =>
              inputHandler(event.target.value, "initialInvest")
            }
            type="number"
            id="initial-investment"
            required
            value={obj.initialInvest}
          />
        </div>
        <div>
          <label for="annual-investment">Annual Investment</label>
          <input
            onChange={(event) =>
              inputHandler(event.target.value, "annualInvest")
            }
            type="number"
            id="annual-investment"
            required
            value={obj.annualInvest}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label for="expected-return">Expected Return</label>
          <input
            onChange={(event) =>
              inputHandler(event.target.value, "expectedRtrn")
            }
            type="number"
            id="expected-return"
            required
            value={obj.expectedRtrn}
          />
        </div>
        <div>
          <label for="duration">Duration</label>
          <input
            onChange={(event) => inputHandler(event.target.value, "duration")}
            type="number"
            id="duration"
            required
            value={obj.duration}
          />
        </div>
      </div>
    </section>
  );
}

export default Form;
