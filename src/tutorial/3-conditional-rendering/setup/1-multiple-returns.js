import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h4>Error!</h4>
      </div>
    );
  }
  return (
    <div>
      <h4>{user}</h4>
    </div>
  );
};

export default MultipleReturns;
