import React from "react";

export default function InputMessage({ text, handleChange }) {
  return (
    <form onChange={(e) => handleChange(e.target.value)}>
      <input
        value={text}
        name="TexToCount"
        placeholder="Type text  here ..."
        autoComplete="off"
      />
      {/* <button type="submit" className="imageDisplay">
        Submit
      </button> */}
    </form>
  );
}
