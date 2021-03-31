import React from "react";
// import App from "./App"

const ListResult = ({ mostUsedLetters, highestCount }) => {
  return (
    <div className="listing" key={mostUsedLetters}>
      {mostUsedLetters.length > 0 ? (
        <p>
          Favourite letters are : {mostUsedLetters.join(",")} counts : {highestCount}
        </p>
      ) : (
        <p>Please enter in some text for me to count :D</p>
      )}
    </div>
  );
};

ListResult.defaultProps = {
  mostUsedLetters: [],
  highestCount: 0
};

export default ListResult;
