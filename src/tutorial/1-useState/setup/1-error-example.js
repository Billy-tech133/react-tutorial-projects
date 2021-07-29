import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "Hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
