import React, { useState } from 'react';

function EditList({ list, onSave, onCancel }) {
  const [name, setName] = useState(list.name);
  const [members, setMembers] = useState(list.members);
  const [newMemberName, setNewMemberName] = useState('');

  const handleAddMember = () => {
    if (newMemberName.trim()) {
      const newMember = { id: Date.now(), name: newMemberName.trim() };
      setMembers([...members, newMember]);
      setNewMemberName('');
    }
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleSave = () => {
    onSave({ ...list, name, members });
  };

  return (
    <div>
      <h2>Upravit seznam</h2>

      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      
      <button onClick={handleSave}>Uložit změny</button>
      <button onClick={onCancel}>Zrušit</button>
      
      <div>
        <h3>Členové</h3>
        {members.map(member => (
          <div key={member.id}>
            <span>{member.name}</span>
            <button onClick={() => handleRemoveMember(member.id)}>Odstranit</button>
          </div>
        ))}
      </div>
      
      <div>
        <input 
          type="text" 
          value={newMemberName} 
          onChange={(e) => setNewMemberName(e.target.value)}
          placeholder="Nový člen"
        />
        <button onClick={handleAddMember}>Přidat člena</button>
      </div>
    </div>
  );
}

export default EditList;
