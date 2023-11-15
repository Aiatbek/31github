import React from "react";
import { formatter } from "../util/investment";

function Table(props) {
  let totalInterest = 0;
  return (
    <div>
      <table id="result">
        <thead id="result-head">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody id="result-name">
          {props.info.map((obj) => {
            totalInterest += parseFloat(obj.interest);
            let investedCapital =
              parseFloat(obj.valueEndOfYear) - totalInterest;
            // let investedCapital = obj.initialInvest;
            console.log(totalInterest);
            return (
              <tr key={`${Math.random(1)}`}>
                <td>{obj.year}</td>
                <td>{formatter.format(obj.valueEndOfYear)}</td>
                <td>{formatter.format(obj.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
