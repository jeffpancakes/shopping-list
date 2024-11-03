import React, { useState } from 'react';
import Item from './Item';
import Member from './Member';
import FilterItemsButton from './buttons/FilterItemsButton';
import '../styles/items.css';
import '../styles/members.css';
import '../styles/actions.css';
import '../styles/addItem.css';
import '../styles/filter.css';
import '../styles/header.css';

function ListDetail({ list, onEdit, onDelete, onAddItem, onRemoveItem, onToggleComplete, onRemoveMember, onFilter }) {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: newItemName.trim(),
        completed: false,
      };
      onAddItem(newItem);
      setNewItemName('');
      setIsAddingItem(false);
    }
  };

  return (
    <div className="container">
      <div className="header-container">
        <h2>{list.name}</h2>
        <div className="filter-container">
          <FilterItemsButton onClick={onFilter} />
        </div>
      </div>

      <div className="items-container">
        <h3>Položky seznamu</h3>
        {list.items.map(item => (
          <Item 
            key={item.id} 
            item={item} 
            onRemove={() => onRemoveItem(item.id)}
            onToggleComplete={() => onToggleComplete(item.id)}
          />
        ))}
      </div>

      {isAddingItem && (
        <div className="add-item-container">
          <input 
            type="text" 
            value={newItemName} 
            onChange={(e) => setNewItemName(e.target.value)}
            className="add-item-input"
            placeholder="Název nové položky"
          />
          <button className="add-item-button" onClick={handleAddItem}>Přidat</button>
        </div>
      )}

      <div className="members-container">
        <h3>Členové seznamu</h3>
        {list.members.map(member => (
          <Member 
            key={member.id}
            member={member}
            onRemove={() => onRemoveMember(member.id)}
          />
        ))}
      </div>

      <div className="actions-container" style={{ marginTop: '20px' }}>
        <button className="edit-button" onClick={() => setIsAddingItem(true)}>Přidat položku</button>
        <button className="edit-button" onClick={onEdit}>Upravit seznam</button>
        <button className="delete-button" onClick={onDelete}>Smazat seznam</button>
      </div>
    </div>
  );
}

export default ListDetail;
