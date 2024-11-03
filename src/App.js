import React, { useState } from 'react';
import ListDetail from './components/ListDetail';
import EditList from './components/EditList';
import shoppingListData from './data/shoppingListData';

function App() {
  const [list, setList] = useState(shoppingListData);
  const [isEditing, setIsEditing] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleAddItem = (newItem) => {
    setList({ ...list, items: [...list.items, newItem] });
  };

  const handleRemoveItem = (id) => {
    setList({ ...list, items: list.items.filter(item => item.id !== id) });
  };

  const handleToggleComplete = (id) => {
    setList({
      ...list,
      items: list.items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    });
  };

  const handleRemoveMember = (id) => {
    setList({ ...list, members: list.members.filter(member => member.id !== id) });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedList) => {
    setList(updatedList);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const filteredItems = list.items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true;
  });

  return (
    <div>
      {isEditing ? (
        <EditList list={list} onSave={handleSave} onCancel={handleCancelEdit} />
      ) : (
        <ListDetail 
          list={{ ...list, items: filteredItems }}
          onEdit={handleEdit}
          onDelete={() => setList(null)}
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
          onToggleComplete={handleToggleComplete}
          onRemoveMember={handleRemoveMember}
          onFilter={setFilter}
        />
      )}
    </div>
  );
}

export default App;