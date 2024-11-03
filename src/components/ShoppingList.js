import React, { useState } from 'react';
import shoppingListData from '../data/shoppingListData';
import ListDetail from './ListDetail';
import AddItemButton from './buttons/AddItemButton';
import FilterItemsButton from './buttons/FilterItemsButton';

function ShoppingList() {
  const [list, setList] = useState(shoppingListData);
  const [newItemName, setNewItemName] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName, completed: false };
      setList({ ...list, items: [...list.items, newItem] });
      setNewItemName('');
    }
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredItems = list.items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true;
  });

  return (
    <div>
      <ListDetail list={list} items={filteredItems} setList={setList} />
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Přidat novou položku"
      />
      <AddItemButton onClick={handleAddItem} />
      <FilterItemsButton onClick={handleFilter} />
    </div>
  );
}

export default ShoppingList;
