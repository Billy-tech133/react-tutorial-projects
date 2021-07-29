import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let remove = people.filter((person) => person.id !== id);
    setPeople(remove);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>Remove Item</button>
            </div>
          </>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
