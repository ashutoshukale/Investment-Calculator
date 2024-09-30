import Header from "./components/Header";
import { calculateInvestmentResults } from "./util/investment";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });
  const isVaildInput = userInput.duration >= 1;
  let annualData = calculateInvestmentResults(userInput);
  function handleClickEvent(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
    annualData = calculateInvestmentResults(userInput);
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleClickEvent={handleClickEvent} />
      {!isVaildInput && (
        <p className="center">Please Enter Duration greater than zero!</p>
      )}
      {isVaildInput && <Results annualData={annualData} />}
    </>
  );
}

export default App;
