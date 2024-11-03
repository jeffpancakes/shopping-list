import React from 'react';
import Item from './Item';

function Items({ items, setList, listId }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} setList={setList} listId={listId} />
      ))}
    </ul>
  );
}

export default Items;