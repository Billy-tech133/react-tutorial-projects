import React, { useState } from "react";

const UseStateObject = () => {
  const [object, setObject] = useState({
    age: 21,
    name: "Billy-Brown",
    message: "I am gonna make this money",
  });
  const editObject = () => {
    setObject({ ...object, name: "shmurda" });
    // setObject({ ...object, age: "27" });
    // setObject({ ...object, message: "We gone pull on em" });
  };
  return (
    <>
      <h3>{object.age}</h3>
      <h3>{object.name}</h3>
      <h4>{object.message}</h4>
      <button className="btn" onClick={editObject}>
        Editing
      </button>
    </>
  );
};

export default UseStateObject;
