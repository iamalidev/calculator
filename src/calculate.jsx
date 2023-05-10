import React, { useState } from "react";

const Calculator = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  return (
    <div className="content">
      <div className="content-wrapper">
        <div className="counts-wrapper">
          <h1 className="first-count">{firstCount}</h1>
          <h1 className="plus">+</h1>
          <h1 className="second-count">{secondCount}</h1>
          <h1 className="equal">=</h1>
          <h1 className="result">{firstCount + secondCount}</h1>
        </div>
        <div className="buttons">
          <div className="first-count_btns">
            <button className="first-count_add" onClick={() => setFirstCount(firstCount + 1)}>+</button>
            <button className="first-count_subt" onClick={() => setFirstCount(firstCount - 1)} disabled={firstCount == 0}>-</button>
          </div>
          <div className="math-operators">
            <div className="left">
              <button className="math-operators_add">+</button>
              <button className="math-operators_subt">-</button>
            </div>
            <div className="right">
              <button className="math-operators_mult">×</button>
              <button className="math-operators_div">÷</button>
            </div>
          </div>
          <div className="second-count_btns">
            <button className="second-count_add" onClick={() => setSecondCount(secondCount + 1)}>+</button>
            <button className="second-count_subt" onClick={() => setSecondCount(secondCount - 1)} disabled={secondCount == 0}>-</button>
          </div>
          <button className="result-btn">=</button>
          <button className="reset">C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
