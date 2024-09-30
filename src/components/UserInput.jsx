import { useState } from "react";

export default function UserInput({ userInput, handleClickEvent }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            defaultValue={userInput.initialInvestment}
            onChange={(event) =>
              handleClickEvent("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            defaultValue={userInput.annualInvestment}
            onChange={(event) =>
              handleClickEvent("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            defaultValue={userInput.expectedReturn}
            onChange={(event) =>
              handleClickEvent("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            defaultValue={userInput.duration}
            onChange={(event) =>
              handleClickEvent("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
