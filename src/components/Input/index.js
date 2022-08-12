import { useState } from "react";
import { axios } from "axios";

function Input({ addSteps, handleSteps, handleDate, stepsInput }) {
  return (
    <div id="input">
      Select Day
      <input
        type="date"
        placeholder="dd-mm-yyyy"
        onChange={handleDate}
        min="2022-01-01"
        max="2022-01-10"
        required="required"
      ></input>
      Step Count:
      <input
        onChange={handleSteps}
        type="number"
        step="1"
        min="0"
        max="100000"
        value={stepsInput}
        required="required"
      ></input>
      <button onClick={addSteps}>Add your steps</button>
    </div>
  );
}

export default Input;
