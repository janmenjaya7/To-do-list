import React, { useState } from "react";
function ListItem({ id, value, onDelete }) {
  const [line, setLine] = useState(false);
  return (
    <div className="mean-section">
      <div className="list-item" key={id}>
        <li
          style={{
            textDecoration: line ? "line-through" : undefined,
          }}
        >
          {value}
        </li>
        <div>
          <button onClick={() => setLine(true)} className="edit">
            Continue
          </button>
          <button onClick={() => onDelete(value.id)} className="remove">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
