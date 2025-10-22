import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results"

function App() {
  const[userInput,setUserInput]=useState({
        initialInvestment:1000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10,
    })

    const inputISValid=userInput.duration>=1;

    function handleChange(identifier,newValue){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [identifier]: +newValue,
            };
        })
    }

  return (
    // <h1>React Investment Calculator</h1>
    <>
    <Header/>
    <UserInput handleChange={handleChange} userInput={userInput}/>
    {!inputISValid && <p className="center">Please Enter the value that is greater than zero.</p>}
    { inputISValid && <Results input={userInput}/>}
    </>
  )
}

export default App
