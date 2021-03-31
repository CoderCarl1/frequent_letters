import React, { useState } from "react";
import InputMessage from "./components/InputText";
import ListResult from "./components/ListResult";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  // const [countLetters, setCountLetters] = useState({});
  const [highestCount, setHighestCount] = useState(0);
  const [mostUsedLetters, setMostUsedLetters] = useState([]);

  /* 
  STATE CHANGE IS ASYNC. 
  We are referencing values we create rather than state that is being updated
  State will update, we just won't wait for it to happen.
  */
  const handleChange = (string) => {
    //is there any reason for the replace??
    // setText(event.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase());
    setText(string);
    // makes an obj dictionary of the letters and passes it to the state when the text state changes

    let lettersDictionary = [...string].reduce(
      (accumulated, currentChar) =>
        // check if character has been seen before
        accumulated.hasOwnProperty(currentChar)
          ? { ...accumulated, [currentChar]: accumulated[currentChar] + 1 } // increase its count by 1
          : { ...accumulated, [currentChar]: 1 }, // add it to the object with a count of 1
      {} // start with an empty object
    );
    
    //finds the highest number for reference
    const highestNumber = Math.max(...Object.values(lettersDictionary))
    //returns the highest number found inside the object
    setHighestCount(highestNumber);
    console.log("highest Number", highestNumber);

    //returning an array of the most counted letters.
    let frequentLetters = [];
    for (const [key, value] of Object.entries(lettersDictionary)) {
      console.log("value:", value, "key:", key)
      if (value === highestNumber) frequentLetters.push(key);
    }

    setMostUsedLetters([...frequentLetters]);
  };

  return (
    <div className="messageInput">
      <InputMessage text={text} handleChange={handleChange} />
      <ListResult
        mostUsedLetters={mostUsedLetters}
        highestCount={highestCount}
        text={text}
      />
    </div>
  );
}
