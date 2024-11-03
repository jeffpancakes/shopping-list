import React from 'react';

function Item({ item, onRemove, onToggleComplete }) {
  return (
    <div className="item">
      <span className="item-name">{item.name}</span>
      <span className={`item-status ${item.completed ? '' : 'nevyresene'}`}>
        {item.completed ? 'Vyřešeno' : 'Nevyřešeno'}
      </span>
      <button
        className={item.completed ? 'incomplete-button' : 'complete-button'}
        onClick={onToggleComplete}
      >
        {item.completed ? 'Nevyřešit' : 'Vyřešit'}
      </button>
      <button className="remove-button" onClick={onRemove}>Odstranit</button>
    </div>
  );
}

export default Item;
