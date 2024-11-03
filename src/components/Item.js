import React from 'react';
import '../styles/Item.css';

function Item({ item, onRemove, onToggleComplete }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className={`fw-bold ${item.completed ? 'item-completed' : 'item-incomplete'}`}>
        {item.name}
      </span>
      <div>
        <button
          className={`btn ${item.completed ? 'btn-danger' : 'btn-success'} btn-sm me-2`}
          onClick={onToggleComplete}
        >
          {item.completed ? 'Nevyřešeno' : 'Vyřešeno'}
        </button>
        <button className="btn btn-danger btn-sm" onClick={onRemove}>
          Odstranit
        </button>
      </div>
    </div>
  );
}

export default Item;
