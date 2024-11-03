import React from 'react';

function FilterItemsButton({ onClick }) {
  return (
    <div>
      <button onClick={() => onClick('all')}>Zobrazit vše</button>
      <button onClick={() => onClick('completed')}>Jen vyřešené</button>
      <button onClick={() => onClick('incomplete')}>Jen nevyřešené</button>
    </div>
  );
}

export default FilterItemsButton;